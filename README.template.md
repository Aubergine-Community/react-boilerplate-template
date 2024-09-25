# Project Title

A brief description of your project and what it does.

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install `direenv` for the default environment](#2-install-direenv-for-the-default-environment)
      - [Setup the terminal for the default environment using the official website.](#setup-the-terminal-for-the-default-environment-using-the-official-website)
      - [You can setup your desired node version in `.nvmrc` file.](#you-can-setup-your-desired-node-version-in-nvmrc-file)
      - [Go into your project](#go-into-your-project)
    - [3. Install dependencies](#3-install-dependencies)
    - [4. Git Hooks with Husky](#4-git-hooks-with-husky)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Naming Conventions](#naming-conventions)
  - [Before Starting Development](#before-starting-development)

## Getting Started

Follow these steps to clone, set up, and start working with the project:

### 1. Clone the Repository

```bash
# HTTPS
git clone https://github.com/username/repository-name.git

# SSH
git clone git@github.com:username/repository-name.git
```

### 2. Install `direenv` for the default environment

**For macOS (Homebrew):**

```bash
brew install direenv
```

**For Ubuntu:**

```bash
sudo apt install direnv
```

##### Setup the terminal for the default environment using the [official website](https://direnv.net/docs/hook.html).

##### You can setup your desired node version in `.nvmrc` file.

#### Go into your project

```bash
cd your-project-name

# give permissions to direenv
direenv allow
```

### 3. Install dependencies

```bash
npm install
```

### 4. Git Hooks with Husky

Initialize the git repository

```bash
git init
```

Install the husky to setup the hooks.

```bash
npx husky install

# now, you have running hooks setup in place.
```

## Usage

Below are the available commands to help manage the project:

- **`npm run dev`**: Starts the Vite development server.

- **`npm run build`**: Compiles TypeScript and builds the app for production.

- **`npm run lint`**: Runs ESLint to check for code quality issues.

- **`npm run prettier:check`**: Verifies if files are formatted with Prettier.

- **`npm run lint-staged`**: Runs linters on staged files before committing.

- **`npm run preview`**: Previews the production build locally.

- **`npm run icons:create`**: Converts SVGs in `./src/assets/icons` into React components.

- **`npm run disable-hooks`**: Disables Git hooks.

- **`npm run enable-hooks`**: Re-enables Git hooks.

## Folder Structure

```bash
.
├── .github                      # GitHub-specific workflows and templates
├── .husky                       # Husky pre-commit hooks (e.g., linting, testing)
├── .vscode                      # VSCode workspace settings and recommended extensions
├── src                          # Source files for the project
│   ├── assets                   # Static resources (images, fonts, etc.)
│   ├── components               # Reusable React components
│   ├── constants                # Application-wide constants
│   ├── https                    # HTTPS utility functions (API calls, etc.)
│   ├── pages                    # Page-level components
│   ├── routes                   # Application routes
│   ├── svgr                     # SVG to React components configuration
│   │   ├── index-template.cjs   # Template for exporting SVG components
│   │   ├── svgr-config.json     # SVGR configuration file
│   │   └── svgr-template.cjs    # Template for converting individual SVGs into React components
│   ├── theme                    # Theming files for typography, colors, spacing, etc.
│   └── types                    # TypeScript types
├── .editorconfig                # EditorConfig for consistent coding styles across IDEs
├── .envrc                       # Environment configuration using direnv
├── .gitignore                   # Git ignore file
├── .nvmrc                       # Node.js version configuration
├── .prettierignore              # Ignore file for Prettier
├── .prettierrc                  # Prettier configuration
├── .validate-branch-namerc.json # Configuration for validating branch names
├── commitlint.config.cjs        # Commit message linting configuration
├── eslint.config.js             # ESLint configuration
├── index.html                   # Main HTML file for the project
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lockfile for package dependencies
├── README.md                    # Project readme
├── tsconfig.app.json            # TypeScript configuration for application code
├── tsconfig.json                # General TypeScript configuration
├── tsconfig.node.json           # TypeScript configuration for Node.js
└── vite.config.ts               # Vite configuration file
```

## Naming Conventions

- **Files/Folders**
  - Component File: PascalCase.tsx
  - All other files/folders: kebab-case
- **Variables**
  - Global constants: SCREAMING_SNAKE_CASE
  - Component: PascalCase
  - Boolean variable or props: camelCase with prefix `does`, `has`, `is` and `should`
    - e.g. isLoading, doesContain, hasElement
  - Others: camelCase
- **Types**
  - Interfaces: PascalCase with `I` as prefix
    - e.g. IUser, IResponse
  - Enumerations: PascalCase
  - Types: PascalCase
- **Methods/Functions**
  - Methods/Functions: camelCase
  - Hooks: camelCase with `use` as prefix
    - e.g. useList, useDetails
  - Higher Order Components: camelCase with `with` as prefix
    - e.g. withTimer

## Before Starting Development

Ensure you have completed the following steps.

- [ ] Changed the project prefix in `.validate-branch-namerc.json` and `commitlint.config.cjs`
- [ ] Changed the color `#1C202A` in `svgr-config.json` to your default icon color.
- [ ] Delete `README.md` and rename this file to `README.md`.
- [ ] Updated the `README.md` file.
- [ ] Deleted/Updated LICENSE file.
- [ ] Deleted `CONTRIBUTING.md` from `.github`.
- [ ] If not using dependabot then deleted the `dependabot.yml` file from `.github`.
