module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base'],
  plugins: [],
  rules: {
    'import/prefer-default-export': 0,
    'no-param-reassign': [
      "error",
      { "props": false }
      ],
  },
};