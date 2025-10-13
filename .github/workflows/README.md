# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the React Native Windows repository.

## Available Workflows

### Cherry-pick Commit to Branch

**File:** `cherry-pick-commit.yml`

Cherry-picks a specific commit into a target branch by creating a pull request.

**Usage:**

1. Go to the Actions tab in the GitHub repository
2. Select "Cherry-pick Commit to Branch" workflow
3. Click "Run workflow"
4. Enter the required inputs:
   - **Commit SHA or ID**: The full commit hash or short SHA of the commit to cherry-pick
   - **Target branch name**: The branch where you want to cherry-pick the commit

**Example:**

- Commit ID: `d1a95351e5203a6c0651cf73885cd7ea99e7d2b9`
- Target branch: `0.79-stable`

**Notes:**

- The workflow will fail if there are merge conflicts during cherry-pick
- If conflicts occur, you'll need to resolve them manually
- The workflow creates a new branch named `copilot/cherry-pick-<commit_id>` and opens a pull request to the target branch
- Review and merge the pull request to complete the cherry-pick process
