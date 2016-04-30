# fancy-console
Colorize JavaScript console messages, a fancy tool for Node command line

## Installation

Locally:
```console
npm install fancy-console
```

Globally:
```console
npm install -g fancy-console
```

## How to use it?

```js
var fc = require('fancy-console');

fc.log('log in white')
fc.error('error in red')
fc.warn('warn in yellow')
fc.info('info in blue')

// with parameter
var myVar = 15;
fc.log('the value of my var is %d', myVar)
```
