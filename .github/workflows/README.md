# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automating various tasks in the React Native Windows repository.

## Workflows

### cleanup-copilot-branches.yml

Automatically cleans up inactive `copilot/*` branches to maintain repository hygiene.

**Features:**
- Identifies all branches matching the pattern `copilot/*`
- Checks the last commit date for each branch
- Deletes branches that have been inactive for more than a configurable number of days
- Runs automatically on a bi-weekly schedule (1st and 15th of each month)
- Can be manually triggered via workflow_dispatch

**Configuration:**
- `INACTIVITY_DAYS`: Default is 90 days. Set to `0` to delete all `copilot/*` branches (useful for testing)

**Manual Execution:**
1. Go to Actions tab in GitHub
2. Select "Cleanup Inactive Copilot Branches" workflow
3. Click "Run workflow"
4. Optionally set `inactivity_days` parameter (default: 90)
5. Click "Run workflow" to confirm

**For Testing:**
To test the workflow without affecting production branches, set `inactivity_days` to `0`. This will simulate deletion of all `copilot/*` branches and help verify the workflow logic.

**Logging:**
The workflow provides detailed logging including:
- List of all `copilot/*` branches found
- Last commit date and SHA for each branch
- Decision to delete or keep each branch
- Summary of deleted and kept branches

### compliance-yarn-lock.yml

Refreshes yarn.lock file to ensure dependencies are up to date.

### move-issues-milestones.yml

Moves issues from one milestone to another (manual trigger only).

### update-issue-remaining-days.yml

Updates remaining days for issues in project boards (currently disabled).

## Best Practices

- All workflows use `ubuntu-latest` runner
- GitHub CLI (`gh`) is used for API interactions
- Workflows include error handling with `set -e`
- Detailed logging with emoji indicators for better readability
- Manual triggers available via `workflow_dispatch` for testing
