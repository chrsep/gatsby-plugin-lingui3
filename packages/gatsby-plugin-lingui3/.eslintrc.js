module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
  },
  extends: [
    "airbnb-typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  rules: {
    "react/prop-types": "off",
    "react/jsx-fragments": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off"
  }
}
