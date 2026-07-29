# GitHub App Permissions Required

The connected GitHub App can currently read `robssn/www`, but GitHub returned `403 Resource not accessible by integration` for both branch creation and repository file creation.

Grant the app the following repository permissions for `robssn/www`:

- Contents: Read and write
- Pull requests: Read and write
- Workflows: Read and write, if workflow files must be created through the app
- Metadata: Read-only

After permissions are updated, reconnect or refresh the GitHub app installation. Alternatively, extract this package and run `scripts/publish.ps1` on Windows or `scripts/publish.sh` on macOS/Linux.
