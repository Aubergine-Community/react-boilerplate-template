import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import reactA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';
/**
 * TODO: Configure eslint-plugin-import after they release a stable version
 * As of 2024-09-13 version 2.30.0 is not compatible with typescript-eslint and eslint
 * Created an Issue: https://github.com/import-js/eslint-plugin-import/issues/3064
 */

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      '*.html',
      'tsconfig.json',
      'tsconfig.node.json',
      'tsconfig.app.json',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      sourceType: 'module',
    },
    plugins: {
      'react-hooks': reactHooks,
      'jsx-a11y': reactA11y,
      react: react,
      prettier: prettier,
    },
    settings: {
      react: {
        version: 'detect',
        runtime: 'automatic',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactA11y.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off', // Don't need this rule as there is new way of building introduced in React17+
    },
  },
);
