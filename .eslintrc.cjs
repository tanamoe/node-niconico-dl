module.exports = {
  root: true,
  extends: ['prettier'],
  overrides: [
    {
      files: ['src/**/*.ts', 'test/**/*.ts'],
      plugins: [
        '@typescript-eslint',
      ],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
};
