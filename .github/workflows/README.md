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
   - **Target branch name**: The branch where you want to cherry-pick the commit

**Example:**

- Commit ID: `d1a95351e5203a6c0651cf73885cd7ea99e7d2b9`
- Target branch: `0.79-stable`

**Notes:**

- The workflow will fail if there are merge conflicts during cherry-pick
- If conflicts occur, you'll need to resolve them manually
- The commit will be pushed directly to the target branch after successful cherry-pick

---

### Hard Reset Branch to Commit

**File:** `hard-reset-branch.yml`

Force resets a branch to a specific commit, discarding all commits after that point.

**Usage:**

1. Go to the Actions tab in the GitHub repository
2. Select "Hard Reset Branch to Commit" workflow
3. Click "Run workflow"
4. Enter the required inputs:
   - **Branch name to reset**: The branch you want to reset
   - **Commit SHA to reset to**: The commit SHA you want to reset the branch to

**Example:**

- Branch name: `0.79-stable`
- Commit SHA: `d1a95351e5203a6c0651cf73885cd7ea99e7d2b9`

**Notes:**

- ⚠️ **Warning**: This is a destructive operation that cannot be undone
- All commits after the specified commit will be permanently removed from the branch
- The workflow validates that both the branch and commit exist before performing the reset
- The branch will be force-pushed after the reset
