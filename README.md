# follow-react-router-v4-tutorial

This project is a test project following a [tutorial on React Router v4](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf) and was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setting up the app

1. Create the app using [Create React App](https://github.com/facebookincubator/create-react-app)
2. Set up ESLint to use airbnb style following the [eslint-config-airbnb description](https://www.npmjs.com/package/eslint-config-airbnb)
    - Install airbnb dependencies
      ```
      export PKG=eslint-config-airbnb; npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
      ```
    - Set up .eslintrc
      ```
      {
        "extends": "airbnb",
        "parser": "babel-eslint",
        "plugins": [
          "import",
          "jsx-a11y",
          "react"
        ],
        "rules": {
          "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
          "no-undef": "off"
        }
      }
      ```
3. Install [prop-types npm module](https://www.npmjs.com/package/prop-types)
      ```
      npm install --save prop-types
      ```
4. Follow the [tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)