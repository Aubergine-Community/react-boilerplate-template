
# Contribution Guidelines

We appreciate your contributions to this project! Please follow these guidelines to ensure a smooth and collaborative development process.

## 1. Fork the Repository

Before contributing, fork the repository and create a new branch for your changes. This helps keep the `main` branch stable.

## 2. Branch Naming Convention

Follow the branch naming convention:

```bash
<type>/<project-prefix>-<ticket-id>-<feature-or-fix-description>
```

Prefix for this project is: `ART`

For example:
- `feature/ART-1-add-user-auth`
- `fix/ART-1-resolve-login-bug`

## 3. Commit Message Format

Use the following format for commit messages:

```
<ticket> <type>: <short description>
```

- **Type**: Choose from `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`.
- **Description**: Short explanation of the changes.

Example:
```bash
ART-1234 feature: add login functionality
```

## 4. Pull Request Guidelines

When creating a pull request:
- Reference any related issues in the description.
- Ensure your branch is up-to-date with the `main` branch.
- Add meaningful details in the provided PR template to aid reviewers.
- Avoid large PRs. Break down large changes into smaller, manageable PRs.

## 5. Review Process

Expect feedback during code review. Ensure you:
- Address review comments promptly.
- Avoid force-pushing to resolve conflicts after a review has started.

## 6. Documentation

Update relevant documentation in the code or README if your changes affect usage or add new functionality.
