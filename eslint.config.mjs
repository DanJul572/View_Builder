import { fixupConfigRules } from '@eslint/compat';
import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react/configs/recommended.js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactJsx from 'eslint-plugin-react/configs/jsx-runtime.js';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...fixupConfigRules([
    {
      ...react,
      settings: {
        react: { version: 'detect' },
      },
    },
    reactJsx,
  ]),
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  { ignores: ['dist/'] },
];
