# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the React Native Windows repository.

## Available Workflows

### Cherry-pick Commit to Branch

**File:** `cherry-pick-commit.yml`

Cherry-picks a specific commit into a target branch.

**Usage:**

1. Go to the Actions tab in the GitHub repository
2. Select "Cherry-pick Commit to Branch" workflow
3. Click "Run workflow"
4. Enter the required inputs:
   - **Commit SHA or ID**: The full commit hash or short SHA of the commit to cherry-pick
   - **Target branch name**: Select the target branch from the dropdown menu

**Example:**

- Commit ID: `d1a95351e5203a6c0651cf73885cd7ea99e7d2b9`
- Target branch: Select from available branches (e.g., `main`, `integrate`, `testing`)

**Notes:**

- The workflow will fail if there are merge conflicts during cherry-pick
- If conflicts occur, you'll need to resolve them manually
- The commit will be pushed directly to the target branch after successful cherry-pick

### Refresh yarn.lock

**File:** `compliance-yarn-lock.yml`

Refreshes the yarn.lock file for specified branches weekly or on-demand.

### Move Issues Between Milestones

**File:** `move-issues-milestones.yml`

Moves open issues from one milestone to another.

### Update Issue Remaining Days

**File:** `update-issue-remaining-days.yml`

(Currently disabled) Automatically sets remaining days to 0 when an issue is closed.
