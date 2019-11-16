## 🍜 introduction

This is a react template(or called starter) for typescript users, details below:

**warning:** this repo will try best to keep dependencies the latest and all work well, it doesn't take back-compatibility into consideration.

- use `babel` for `typescript` compile
- use `jest` and `@testing-library/react` for test
- use [this repo](https://github.com/XHMM/my-config-files) for lint setup
- and includes these libraries:
  - `styled-components` and related babel plugin
  - `@material-ui/core`
  - `@material-ui/icons` and babel setup for reducing bundle size
  - `react-router-dom`
- support `sass`
-  `core-js@3.x` for js polyfill

## 🥡 install

Option one (automatically):

1. use corresponding **[CLI](https://github.com/XHMM/trs)** to conveniently fetch and extract this starter.
2. then `cd folder` and run `npm install`

Option two (manually):

1. download this repo and extract it.
2. then `cd folder` and run `npm install`

## 🍱 scripts

- `npm run start` to start webpack-dev-server
- `npm run build` to build production code
- `npm run test` to test
- `npm run eslint:fix` to automatically fix all fixable errors

## 🥗notes

- you can use these alias to import files, current there are four alias available:

  ```js
  import Img from '~images/apple.jpg';
  import Button from '~components/Button';
  import useCounter from '~hooks/useCounter';
  import Index from '~pages/index/Index'; 
  ```
