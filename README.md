# React Boilerplate Template

A powerful and flexible boilerplate for starting React projects, leveraging Vite for fast builds, TypeScript for type safety, and built-in support for internationalization, SVG handling, and code quality tools like ESLint, Husky, and Prettier.

## Table of Contents

- [React Boilerplate Template](#react-boilerplate-template)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Version used for Major Dependencies](#version-used-for-major-dependencies)
  - [Project Folder Structure](#project-folder-structure)
  - [Naming Conventions](#naming-conventions)
  - [Getting Started](#getting-started)
    - [1. Clone the Repository](#1-clone-the-repository)
    - [2. Install ```direenv``` for the default environment](#2-install-direenv-for-the-default-environment)
        - [Setup the terminal for the default environment using the official website.](#setup-the-terminal-for-the-default-environment-using-the-official-website)
        - [You can setup your desired node version in ```.nvmrc``` file.](#you-can-setup-your-desired-node-version-in-nvmrc-file)
      - [Go into your project](#go-into-your-project)
    - [3. Install dependencies](#3-install-dependencies)
    - [4. Git Hooks with Husky](#4-git-hooks-with-husky)
    - [5. Change the prefix of branch name and commit message](#5-change-the-prefix-of-branch-name-and-commit-message)
    - [6. Configure Internationalization](#6-configure-internationalization)
    - [7. Configure SVGR for your project](#7-configure-svgr-for-your-project)
    - [8. Update the `README.template.md` file](#8-update-the-readmetemplatemd-file)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Husky**: Pre-commit hooks to enforce linting and testing rules before pushing code.
- **ESLint**: Configured with plugins for React, JSX accessibility, and Prettier integration.
- **Prettier**: Consistent code formatting across the project.
- **Path Aliases**: Simplified imports with custom path aliases.
- **PR Template**: Standardized pull request template to maintain code review consistency.
- **direnv**: Environment management for project-specific settings.
- **EditorConfig**: Editor configuration to maintain consistent coding styles across IDEs.
- **Folder Structure**: Organized project structure for scalable and maintainable code.
- **Internationalization (i18n)**: Integrated `i18next` and `react-i18next` for handling multiple languages, enabling easy localization of content. The setup includes automatic language detection via the `i18next-browser-languagedetector` package, making the user experience seamless and adaptive based on browser settings.
- **SVGR Integration**: SVGs are handled using `@svgr/cli`, which converts SVG files into React components. This enables easy embedding and manipulation of SVG icons and graphics directly within the React codebase, keeping assets clean and code efficient.
- **VSCode Configuration**: The `.vscode` folder includes custom workspace settings, extensions, and code snippets to streamline development.
  - **Extensions**: Recommended VSCode extensions to ensure a consistent development environment across the team.
  - **Settings**: Predefined settings for formatting, linting, and other preferences to ensure uniformity in coding style.
  - **Code Snippets**: Custom snippets for commonly used code patterns, reducing boilerplate code and improving productivity.

## Version used for Major Dependencies

| Package                          | Version  |
|----------------------------------|----------|
| node                             | 22.8.0   |
| react                            | 18.3.1   |
| vite                             | 5.4.1    |
| typescript                       | 5.5.3    |
| eslint                           | 9.10.0   |
| husky                            | 8.0.0    |
| prettier                         | 3.3.3    |
| typescript-eslint                | 8.5.0    |
| @eslint/js                       | 9.10.0   |
| vite-tsconfig-paths              | 5.0.1    |
| i18next                          | 23.15.1  |
| i18next-browser-languagedetector | 8.0.0    |
| react-dom                        | 18.3.1   |
| react-i18next                    | 15.0.2   |
| @svgr/cli                        | 8.1.0    |
| npm                              | 10.8.3  |
| lint-staged                      | 15.2.10  |


This template serves as a solid foundation to kickstart new React projects, ensuring consistency, efficiency, and adherence to best practices across the team.

## Project Folder Structure
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

* **Files/Folders**
  * Component File: PascalCase.tsx
  * All other files/folders: kebab-case
* **Variables**
  * Global constants: SCREAMING_SNAKE_CASE
  * Component: PascalCase
  * Boolean variable or props: camelCase with prefix `does`, `has`, `is` and `should`
    * e.g. isLoading, doesContain, hasElement
  * Others: camelCase
* **Types**
  * Interfaces: PascalCase with `I` as prefix
    * e.g. IUser, IResponse
  * Enumerations: PascalCase
  * Types: PascalCase
* **Methods/Functions**
  * Methods/Functions: camelCase
  * Hooks: camelCase with `use` as prefix
    * e.g. useList, useDetails
  * Higher Order Components: camelCase with `with` as prefix
    * e.g. withTimer


## Getting Started

Follow these steps to clone, set up, and start working with the project:

### 1. Clone the Repository

Use `degit` to clone the boilerplate template:

```bash
npx degit Aubergine-FE/react-basic-template <your-project-name>
```

### 2. Install ```direenv``` for the default environment
**For macOS (Homebrew):**

```bash
brew install direenv
```
**For Ubuntu:**
```bash
sudo apt install direnv
```

##### Setup the terminal for the default environment using the [official website](https://direnv.net/docs/hook.html).

##### You can setup your desired node version in ```.nvmrc``` file.

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

Hooks can be disabled with:

```bash
npm run disable-hooks
```
Changed your mind? Enable hooks with:

```bash
npm run enable-hooks
```

### 5. Change the prefix of branch name and commit message

- You can configure the branch and commit message prefix in ```.validate-branch-namerc.json``` and ```commitlint.config.cjs``` files respectively.

### 6. Configure Internationalization

- You can go through `i18n.ts` and configure the localization settings accordingly. Also see the translations in `assets/locales` folder.

### 7. Configure SVGR for your project

- Change the color `#1C202A` in `svgr-config.json` to your default icon color. This will replace that color with the appropriate props.
- To generate the icon components
  -  Put your icons in `assets/icons`
  -  Now, Run ```npm run icons:create```

### 8. Update the `README.template.md` file

- Change the file name from the `README.template.md` to `README.md`.
- Update the `Project Name`.
- Update the URLs for cloning the project.
- Add any more steps you have for onboarding in `Getting Started`

## Contributing

- see [CONTRIBUTING.md](./.github/CONTRIBUTING.md)

## License

- This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
