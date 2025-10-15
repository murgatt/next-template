import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,
  reactHooksPlugin.configs.flat.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
      'unused-imports': unusedImports,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.json',
        },
      },
    },
  },
  {
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/member-ordering': [
        'error',
        {
          interfaces: { order: 'alphabetically-case-insensitive' },
          typeLiterals: { order: 'alphabetically-case-insensitive' },
        },
      ],

      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        },
      ],

      'newline-before-return': 'error',
      'no-console': 'error',
      'no-shadow': 'error',

      'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.test.tsx'] }],
      'react/jsx-sort-props': ['error', { ignoreCase: true }],
      'react/no-multi-comp': 'error',

      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
      'unused-imports/no-unused-imports': 'error',
    },
  },
  prettier,
  { ignores: ['node_modules/**', '.next/**', 'next-env.d.ts'] },
);
