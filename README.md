# instagrab-node
An application for an application – written in [Node.js](https://nodejs.org/en/) and [React](https://facebook.github.io/react/).

## Quickstart

```
TBD
1. checkout project
2. npm install
3. browserify && watchify -g
4. npm start --> developing and hot compiling
5. npm build --> just building
6. open index.html
```

## Prerequisites

```
TBD
```

## Notes

* it makes use of `ECMAScript 2016`
* JSX syntax is converted with [Babel](https://babeljs.io)
* build your bundle with `browserify`: `browserify -t [ babelify ] main.js -o build/bundle.js`
  * if `browserify` is not installed, use `npm install browserify -g`
  * see [http://browserify.org] for detailed information

```
Note: By default, React will be in development mode, which is slower, and not advised for production. To use React in production mode, set the environment variable NODE_ENV to production (using envify or webpack's DefinePlugin).
```

## Components

```
- App
-- Map
-- Navigation
--- SearchBar
--- *
```

## Test

```
TBD
```

## Outlook

* implement tests
* load Google Maps JavaScript asynchronously via Require.js
* implement SEO
* integrate Bootstrap
