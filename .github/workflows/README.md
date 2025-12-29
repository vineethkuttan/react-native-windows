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

### Change Commit Message

**File:** `change-commit-message.yml`

Changes the commit message for a specific commit on a branch. This workflow rewrites Git history.

**Usage:**

1. Go to the Actions tab in the GitHub repository
2. Select "Change Commit Message" workflow
3. Click "Run workflow"
4. Enter the required inputs:
   - **Commit SHA**: The full commit hash or short SHA of the commit to change
   - **New commit message**: The new message to apply to the commit
   - **Branch name**: The branch where the commit exists

**Example:**

- Commit SHA: `d1a95351e5203a6c0651cf73885cd7ea99e7d2b9`
- New message: `fix: Update component behavior`
- Branch name: `main`

**Notes:**

- ⚠️ **WARNING**: This workflow rewrites Git history using force push
- Only use this on branches where history rewriting is acceptable
- Other collaborators will need to rebase their work after this operation
- The workflow uses `--force-with-lease` to prevent accidental overwrites
- For the most recent commit, it uses `git commit --amend`
- For older commits, it uses `git filter-branch` to rewrite history
- Cannot change the root commit (first commit in repository) message
- Note: `git filter-branch` is deprecated but used here for broad compatibility. For production use, consider `git filter-repo` or interactive rebase
