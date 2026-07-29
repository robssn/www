#!/usr/bin/env bash
set -euo pipefail
repo="robssn/www"
branch="agent/production-lead-funnel"
source_dir="$(cd "$(dirname "$0")/.." && pwd)"
target_dir="$(dirname "$source_dir")/robssn-www-publish"
command -v gh >/dev/null || { echo "GitHub CLI is required. Run: gh auth login" >&2; exit 1; }
gh auth status
rm -rf "$target_dir"
gh repo clone "$repo" "$target_dir"
cd "$target_dir"
git switch -c "$branch"
find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
find "$source_dir" -mindepth 1 -maxdepth 1 ! -name .git ! -name node_modules ! -name dist -exec cp -R {} "$target_dir"/ \;
npm ci
npm test
git add --all
git commit -m "Build ROBSSN production lead funnel website"
git push --set-upstream origin "$branch"
gh pr create --repo "$repo" --base main --head "$branch" --draft --title "Build ROBSSN production lead funnel website" --body "Adds the complete multi-page ROBSSN website, SEO and social metadata, Formspree lead capture, Clay integration guidance, validation scripts, and GitHub Pages deployment workflows."
