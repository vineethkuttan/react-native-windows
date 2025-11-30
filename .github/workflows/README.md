# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the React Native Windows repository.

## Available Workflows

### Git Operations

**File:** `branch-operations.yml`

A combined workflow that provides two git-related operations through a dropdown selector:

1. **Cherry-pick Commit to Branch** - Cherry-picks a specific commit into a target branch
2. **Create Branch from Upstream** - Creates a new branch in your fork based on a branch from the upstream microsoft/react-native-windows repository

**Usage:**

1. Go to the Actions tab in the GitHub repository
2. Select "Git Operations" workflow
3. Click "Run workflow"
4. Select the desired operation from the dropdown:
   - **Cherry-pick Commit to Branch** or **Create Branch from Upstream**
5. Fill in the required inputs based on your selected operation

---

#### Cherry-pick Commit to Branch

Cherry-picks a specific commit into a target branch.

**Required inputs:**

- **Commit SHA or ID**: The full commit hash or short SHA of the commit to cherry-pick
- **Target branch name**: The branch where you want to cherry-pick the commit

**Example:**

- Operation: `Cherry-pick Commit to Branch`
- Commit ID: `d1a95351e5203a6c0651cf73885cd7ea99e7d2b9`
- Target branch: `0.79-stable`

**Notes:**

- The workflow will fail if there are merge conflicts during cherry-pick
- If conflicts occur, you'll need to resolve them manually
- The commit will be pushed directly to the target branch after successful cherry-pick

---

#### Create Branch from Upstream

Creates a new branch in your fork based on a branch from the upstream microsoft/react-native-windows repository.

**Required inputs:**

- **Upstream branch name**: The branch from microsoft/react-native-windows to base your new branch on (e.g., `0.81-stable`, `main`)
- **New branch name** (optional): The name for the new branch in your fork. If left empty, the same name as the upstream branch will be used

**Example:**

- Operation: `Create Branch from Upstream`
- Upstream branch: `0.81-stable`
- New branch name: `my-feature-0.81` (or leave empty to create `0.81-stable` in your fork)

**Notes:**

- The workflow will fail if the specified upstream branch does not exist
- The workflow will fail if the branch already exists in your fork (to prevent overwriting)
- This is useful for creating feature branches based on specific upstream stable releases
