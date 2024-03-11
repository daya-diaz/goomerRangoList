module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
  "requireConfigFile": false, //Add this line
  "babelOptions": {      
    // "configFile": "babel.config.js" //When linting it only works with absolute path
    // Here starts the configuration
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "react-app"
      ],
      "plugins": ["@babel/plugin-syntax-class-properties","@babel/plugin-proposal-class-properties"]
    // Here ends the configuration
    }
  },
}
