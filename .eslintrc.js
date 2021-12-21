module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    'cypress/globals': true,
  },
  plugins: [
    'cypress',
  ],
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-use-before-define': ['error', { functions: false }],
  },
};
