# fancy-console

[![NPM Version][npm-image]][npm-url]
[![Node.js Version][node-version-image]][node-version-url]

Colorize JavaScript console messages, a fancy tool for Node command line

## Installation

Locally:
```sh
npm install fancy-console --save
```

Globally:
```sh
npm install -g fancy-console
```
To run the test inside the module:
```sh
cd node_modules/fancy-console
npm test
```

## How to use it?

```js
var fc = require('fancy-console')

// Access to console with fc.cmd
fc.cmd.time('my-timer')

// Some colorized messages
fc.crit('critical message in purple bold italic')
fc.error('error message in red')
fc.warn('warn message in yellow')
fc.info('info message in cyan')
fc.success('success message in green')
fc.log('log message in white')

var myStyle = fc.styles.inverse + fc.colors.blue;
fc.colorize('A custom message in background blue', myStyle)

// Message with parameter
var myVar = 15;
fc.log('the value of my var is %d', myVar)

fc.cmd.timeEnd('my-timer')
```
## Colors and styles
### Available colors:  

| Color  	|  Render 	|  Attribute |
|:----:	|---	|---- |
|  Black 	|  <span style="width:200px;height:10px;color:black;">Text in black</span>	| fc.colors.black |
|  Red 	|   <span style="width:200px;height:10px;color:rgb(194, 54, 33);">Text in red</span>	|  fc.colors.red |
|  Yellow 	|  <span style="width:200px;height:10px;color:rgb(173, 173, 39);">Text in yellow</span> 	|  fc.colors.yellow |
|  Green 	|   <span style="width:200px;height:10px;color:rgb(37, 188, 36);">Text in green</span>	|  fc.colors.green |
|  Blue	|  <span style="width:200px;height:10px;color:rgb(73, 46, 225);">Text in blue</span> 	|   fc.colors.blue |
|  Purple	|  <span style="width:200px;height:10px;color:rgb(211, 56, 211);">Text in purple</span>	|   fc.colors.purple |
|  Cyan 	|  <span style="width:200px;height:10px;color:cyan;">Text in cyan</span>	| fc.colors.cyan |

### Available styles:

| Style  	|  Render 	|  Attribute |
|:-------:|----------	|---- |
| Bold  	|  **Text in bold** 	|  fc.styles.bold |
| Italic  |  _Text in italic_ 	|  fc.styles.italic |
| Underline  	|  <span style="text-decoration:underline;">Text underline</span> 	|  fc.styles.underline |
| Strike  	|  ~~Text strike~~ 	|  fc.styles.strike |
| Inverse  	|  <span style="display:inline-block;padding:2px;background-color:rgb(73, 46, 225);color:black;">Text with background</span> 	|  fc.styles.inverse |

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/npm.svg
[npm-url]: https://npmjs.org/package/fancy-console
[node-version-image]: https://img.shields.io/node/v/accepts.svg
[node-version-url]: http://nodejs.org/download/
