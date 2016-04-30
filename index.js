'use strict';

var util = require('util')

var FancyConsole = {
    
    // Clear ansi tag color
    clear: '\033[0m',
   
    // Styles for futurs implementations
    styles: {
      bold: '\033[1m',
      italic: '\033[2m',
      underline: '\033[3m',
      inverse: '\033[2m',
      strike: '\033[2m',
    },
    
    // Console frontend Color
    colors: {
      black: '\033[30m',     
      red: '\033[31m',
      yellow: '\033[33m',     
      green: '\033[32m',
      blue: '\033[34m',
      purple: '\033[35m',     
      cyan: '\033[36m',     
      white: '\033[37m',     
    },

    // Colorize message
    colorize: function (message, color) {
      var array = [];
      array.push(color, message, this.clear);
      return array.join('');
    },
    
    // Parse message with arguments
    parse: function (string, args) {
      return util.format(string, args);
    },
    
    // Returns formatted message
    format: function (message, args) {   
      var args = args || null;     
      if (null !== args) {
        message = this.parse(message, args);
      }
      return message;
    },
    
    // Log console in white
    log: function (message, args) {
      var string = this.format(message, args);
      return this.colorize(string, this.colors.white);
    },
    
    // Error console in red
    error: function (message, args) {
      return this.colorize(this.format(message, args), this.colors.red);
    },
    
    // Warning console in yellow
    warn: function (message, args) {
      return this.colorize(this.format(message, args), this.colors.yellow);
    },
    
    // Info console in blue
    info: function (message, args) {
      return this.colorize(this.format(message, args), this.colors.blue);
    }
};

module.exports = FancyConsole;

