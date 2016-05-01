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
## Pre-defined messages:

<table>
  <thead><th>Name</th><th>Render</th><th>Method</th></thead>
  <tbody>
  <tr><td>crit</td><td>Text in bold  italic purple</td><td>`function crit(message, args);`</td></tr>
  <tr><td>error</td><td>Text in red</td><td>`function error(message, args);`</td></tr>
  <tr><td>warn</td><td>Text in yellow</td><td>`function warn(message, args);`</td></tr>
  <tr><td>info</td><td>Text in cyan</td><td>`function info(message, args);`</td></tr>
  <tr><td>success</td><td>Text in green</td><td>`function success(message, args);`</td></tr>
  <tr><td>log</td><td>Text in white</td><td>`function log(message, args);`</td></tr>
  </tbody>
</table>

## Colors and styles
### Available colors:  

<table>
  <thead><th>Color</th><th>Render</th><th>Attribute</th></thead>
  <tbody>
    <tr><td>Black</td><td style="color:black;">Text in black</td><td>fc.colors.black</td></tr>
    <tr><td>Red</td><td style="color:rgb(194, 54, 33);">Text in red</td><td>fc.colors.red</td></tr>
    <tr><td>Yellow</td><td style="color:rgb(173, 173, 39);">Text in yellow</td><td>fc.colors.yellow</td></tr>
    <tr><td>Green</td><td style="color:rgb(37, 188, 36);">Text in green</td><td>fc.colors.greeb</td></tr>
    <tr><td>Blue</td><td style="color:rgb(73, 46, 225);">Text in blue</td><td>fc.colors.blue</td></tr>
    <tr><td>Purple</td><td style="color:rgb(211, 56, 211);">Text in purple</td><td>fc.colors.purple</td></tr>
    <tr><td>Cyan</td><td style="color:cyan;">Text in cyan</td><td>fc.colors.cyan</td></tr>
    <tr><td>White</td><td style="color:white;">Text in white</td><td>fc.colors.white</td></tr>
  </tbody>
</table>

### Available styles:

<table>
  <thead><th>Style</th><th>Render</th><th>Attribute</th></thead>
  <tbody>
  <tr><td>Bold</td><td><strong>Text in bold</strong></td><td>fc.styles.bold</td></tr>
  <tr><td>Italic</td><td style="font-style:italic;">Text in italic</td><td>fc.styles.italic</td></tr>
  <tr><td>Underline</td><td style="text-decoration:underline;">Text underline</td><td>fc.styles.underline</td></tr>
  <tr><td>Strike</td><td><strike>Text strike</strike></td><td>fc.styles.strike</td></tr>
  <tr><td>Inverse</td><td style="background-color:rgb(73, 46, 225);color:black;">Text with background</td><td>fc.styles.bold</td></tr>
  </tbody>
</table>

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/npm.svg
[npm-url]: https://npmjs.org/package/fancy-console
[node-version-image]: https://img.shields.io/node/v/accepts.svg
[node-version-url]: http://nodejs.org/download/
