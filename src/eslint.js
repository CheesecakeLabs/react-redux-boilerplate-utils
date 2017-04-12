module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    semi: [2, 'never'],
    'no-console': [2, { allow: ['warn', 'info', 'error'] }],
    'import/named': 2,
    'import/prefer-default-export': 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
    }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/stories.js', '**/*.dev.js', '**/*.test.js', 'server.js'] }],
    'react/jsx-filename-extension': 0,
    'arrow-parens': ['error', 'always'],
  },
  plugins: [
    'react',
  ],
}
