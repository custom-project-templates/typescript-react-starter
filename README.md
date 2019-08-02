## 🍜 introduction

This is a react template(or called starter) for typescript users, details below:

1. use `babel` for `typescript` compile
2. use `jest` and `@testing-library/react` for test
3. use [this repo](https://github.com/XHMM/my-config-files) for lint setup
4. and includes these libraries:
   - `styled-components` and related babel plugin
   - `@material-ui/core`, `@material-ui/styles`
   - `@material-ui/icons` and babel setup for reducing bundle size
   - `react-router-dom`

## 🥡 install

Option one (automatically):

1. use corresponding **[CLI](https://github.com/XHMM/trs)** to conveniently fetch and extract this starter.
2. then `cd folder` and run `npm install`

Option two (manually):

1. download this repo and extract it.
2. then `cd folder` and run `npm install`

## 🍱 scripts

1. `npm run dev` to start dev server
2. `npm run build` to build
3. `npm run test` for test
4. `npm run eslint:fix` to automatically fix every fixable problems

## 🥗notes

1. use `require` instead `import` when import images , or ts compiler will complain "cannot find module xx.jpg" ：

   `const BearImg = require('../images/bear.jpg');`
