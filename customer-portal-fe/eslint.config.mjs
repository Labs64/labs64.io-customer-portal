import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { configureVueProject } from '@vue/eslint-config-typescript';
import pluginPlaywright from 'eslint-plugin-playwright';

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

  { ...pluginPlaywright.configs['flat/recommended'], files: ['e2e/**/*.spec.ts'] },

  skipFormatting,

  {
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

      // TypeScript-specific
      '@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none' }],
    },
  },
);
