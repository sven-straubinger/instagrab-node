# instagrab-node
An application for an application – written in [Node.js](https://nodejs.org/en/) and [React](https://facebook.github.io/react/).


## Notes

* it makes use of `ECMAScript 2016`
* JSX syntax is converted with [Babel](https://babeljs.io)
* build your bundle with browserify: `browserify -t [ babelify ] main.js -o bundle.js`
* see [http://browserify.org] for detailed information

```
Note: By default, React will be in development mode, which is slower, and not advised for production. To use React in production mode, set the environment variable NODE_ENV to production (using envify or webpack's DefinePlugin).
```
