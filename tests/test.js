/**
 * 
 */
var fc = require('../index.js')

// Access to console with fc.cmd
fc.cmd.time('my-timer')

// Some colorized messages
fc.crit('critical message in purple')
fc.error('error message in red')
fc.warn('warn message in yellow')
fc.info('info message in cyan')
fc.success('success message in green')
fc.log('log message in white')
fc.colorize('A custom message in blue', fc.styles.inverse + fc.colors.blue)

// Message with parameter
var myVar = 15;
fc.log('the value of my var is %d', myVar)

fc.cmd.timeEnd('my-timer')