## Commands to setup

<ol>
  <li>yarn init -y</li>
  <li>yarn add react react-dom</li>
  <li>yarn add -D @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loaderyar</li>

  <li>yarn add -D webpack webpack-cli webpack-dev-server</li>
  <li>yarn add -D html-webpack-plugin</li>
  <li>yarn add -D cross-env</li>
  <li>yarn add -D style-loader css-loader</li>
  <li>yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh</li>
  <li>yarn add -D typescript @babel/preset-typescript</li>
</ol>

## Files to create

<ol>
  <li>babel.config.js</li>
  <li>webpack.config.js</li>
</ol>

## eslint and prettier config

<ol>
  <li>add eslint with: yarn add eslint prettier -D</li>
  <li>run: yarn create @eslint/config</li>
  <li>add .prettierrc if needed</li>
</ol>

## add import order plugin

yarn add -D eslint-plugin-simple-import-sort

add to eslitrc:

```js
plugins: [...,'simple-import-sort', 'import'],
rules: {
  ...
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error'
}
```

---

## TODO

- add ordering imports
-

```

```
