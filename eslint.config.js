import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  configPrettier,
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    ignores: ['node_modules', 'dist', 'build'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
      import: pluginImport,
      perttier: pluginPrettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
