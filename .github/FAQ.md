# FREQUENTLY ASKED QUESTIONS

This document provides answers to frequently encountered issues and their
resolutions during the development process.

## 1. Error: Not a git repository

**Cause:**

This error occurred because lint-staged package does not identify the git repository
without any commits.

**Things to Check:**
- This is the first commit of the repository.
- The branch is main.

**Solutions:**

1. Go to the ```.husky/pre-commit```
2. Comment out the ```npx validate-branch-name``` command.
3. After the first commit, uncomment the ```npx validate-branch-name``` command.

