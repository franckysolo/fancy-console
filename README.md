# fancy-console

[![NPM Version][npm-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]

Colorize JavaScript console messages, a fancy tool for Node command line

## Installation

Locally:
```sh
$ npm install fancy-console --save
```

Globally:
```sh
npm install -g fancy-console
```

## How to use it?

```js
var fc = require('fancy-console')

fc.crit('critical message in purple')
fc.error('error message in red')
fc.warn('warn message in yellow')
fc.info('info message in cyan')
fc.success('success message in green')
fc.log('log message in white')
fc.colorize('A custom message in blue', fc.styles.inverse + fc.colors.blue)

// with parameter
var myVar = 15;
fc.log('the value of my var is %d', myVar)
```


## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/npm.svg
[npm-url]: https://npmjs.org/package/fancy-console
[node-version-image]: https://img.shields.io/node/v/accepts.svg
[node-version-url]: http://nodejs.org/download/

