/* jshint node: true, asi: true */
'use strict';

var util = require('util')

var FancyConsole = {
  
    // Returns the console js
    cmd: console,
     
    // Clear ansi tag color
    clear: '\u001b[0m',
   
    // Styles for custom messages
    styles: {
      bold: '\u001b[1m',
      italic: '\u001b[3m',
      underline: '\u001b[4m',
      strike: '\u001b[5m',
      inverse: '\u001b[7m',
    },
    
    // Console frontend Color
    colors: {
      black: '\u001b[30m',     
      red: '\u001b[31m',
      yellow: '\u001b[33m',     
      green: '\u001b[32m',
      blue: '\u001b[34m',
      purple: '\u001b[35m',     
      cyan: '\u001b[36m',     
      white: '\u001b[37m',     
    },
    
  
    // Colorize message
    colorize: function (message, color) {
      var array = [];
      array.push(color, message, this.clear);
      return this.cmd.log(array.join(''));
    },
    
    // Parse message with arguments
    parse: function (string, args) {
      return util.format(string, args);
    },
    
    // Returns formatted message
    format: function (message, args) {   
      args = args || null;     
      if (null !== args) {
        message = this.parse(message, args);
      }
      return message;
    },
  
    // Critical console in bold purple
    crit: function (message, args) {
      var style = this.styles.italic + this.styles.bold + this.colors.purple;
      return this.colorize(this.format(message, args), style);
    },
    
    // Error console in red
    error: function (message, args) {
      return this.colorize(this.format(message, args), this.colors.red);
    },
    
    // Warning console in yellow
    warn: function (message, args) {
      var string = this.format(message, args);
      return this.colorize(string, this.colors.yellow);
    },
    
    // Info console in cyan
    info: function (message, args) {
      return this.colorize(this.format(message, args), this.colors.cyan);
    },
      
    // Success Message in green
    success: function (message, args) {
      return this.colorize(this.format(message, args), this.colors.green);
    },
    
    // Log console in white
    log: function (message, args) {
      return this.colorize(this.format(message, args), this.colors.white);
    }
};

module.exports = FancyConsole;

