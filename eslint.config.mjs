import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { configureVueProject } from '@vue/eslint-config-typescript';
import pluginCypress from 'eslint-plugin-cypress/flat';
import importPlugin from 'eslint-plugin-import';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
import pluginVue from 'eslint-plugin-vue';

configureVueProject({ scriptLangs: ['js', 'ts', 'jsx', 'tsx'] });
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    ...pluginCypress.configs.recommended,
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
  },

  skipFormatting,

  {
    plugins: {
      import: importPlugin,
    },

    rules: {
      // General
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'func-names': ['error', 'never'],
      'no-shadow': 'error',

      // Formatting / Style
      'comma-dangle': ['error', 'always-multiline'],
      indent: 'off', // required for indent-legacy
      'indent-legacy': ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': 'off',
      'max-len': ['error', 120, { ignoreTrailingComments: true }],
      'object-curly-newline': ['error', { consistent: true }],

      // Import plugin
      'import/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@test-utils/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],

      // TypeScript-specific
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],
    },
  },
);
