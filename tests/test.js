// require module
var fc = require('../index.js')

// Access to console with fc.cmd
// Initialize timer
fc.cmd.time('my-timer')

// Some colorized messages
fc.crit('critical message in purple bold italic')
fc.error('error message in red')
fc.warn('warn message in yellow')
fc.info('info message in cyan')
fc.success('success message in green')
fc.log('log message in white')

// A custom message
var myStyle = fc.styles.inverse + fc.colors.blue;
fc.colorize('A custom message in background blue', myStyle)

// Message with parameter
var myVar = 15;
fc.log('the value of my var is %d', myVar)

// Display timer
fc.cmd.timeEnd('my-timer')