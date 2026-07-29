$ErrorActionPreference = "Stop"

$Repo = "robssn/www"
$Branch = "agent/production-lead-funnel"
$Source = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Target = Join-Path (Split-Path $Source -Parent) "robssn-www-publish"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw "GitHub CLI is required. Install it, then run: gh auth login"
}

gh auth status
if (Test-Path $Target) { Remove-Item $Target -Recurse -Force }
gh repo clone $Repo $Target

Push-Location $Target
try {
  git switch -c $Branch
  Get-ChildItem -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
  Get-ChildItem $Source -Force | Where-Object { $_.Name -notin @(".git", "node_modules", "dist") } | Copy-Item -Destination $Target -Recurse -Force
  npm ci
  npm test
  git add --all
  git commit -m "Build ROBSSN production lead funnel website"
  git push --set-upstream origin $Branch
  gh pr create --repo $Repo --base main --head $Branch --draft --title "Build ROBSSN production lead funnel website" --body "Adds the complete multi-page ROBSSN website, SEO and social metadata, Formspree lead capture, Clay integration guidance, validation scripts, and GitHub Pages deployment workflows."
}
finally { Pop-Location }
