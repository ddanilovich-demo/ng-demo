module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['*.js', '*.html', '*.scss'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
};
