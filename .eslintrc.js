module.exports = {
  env: {
    es6: true,
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "quotes": ["error", "double", { "avoidEscape": true }],
    "arrow-body-style": 0,
    "arrow-parens": 0,
    "class-methods-use-this": 0,
    "func-names": 0,
    "indent": 2,
    "new-cap": 0,
    "no-plusplus": 0,
    "no-return-assign": 0,
    "quote-props": 0,
    "jsx-a11y/label-has-for": false,
    "object-curly-newline": 0,
    "max-len": [1, 140, 2],
    "template-curly-spacing": [2, "always"],
    "no-underscore-dangle": [2, { "allow": ["__typename"] }],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "react/forbid-prop-types": 0,
    "react/jsx-curly-spacing": [2, "always"],
    "react/jsx-filename-extension": 0,
    "react/jsx-boolean-value": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0
  },
};
