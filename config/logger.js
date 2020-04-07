/**
 * @module config/logger
 * @requires winston
 * @exports infoLogger
 * @exports errorLogger
 * @exports warnLogger
 */

'use strict'

const { createLogger, transports, format } = require('winston');

// Create logger on info level
const infoLogger = createLogger({
  transports: [
    new transports.File({
      level: 'info',
      filename: './logs/appInfo.log',
    }),
  ],
});

infoLogger.stream = {
  /**
   * Pass morgan log to winston output
   * @function write
   * @param {string} message - Message to be logged
   * @param {string} encoding - Encoding
   */
  write: function (message, encoding) { 
    infoLogger.info(message);
  },
};

// Create logger on error level
const errorLogger = createLogger({
  transports: [
    new transports.File({
      level: 'error',
      filename: './logs/appErrors.log',
      handleExceptions: true
    }),
  ],
});

// Create logger on warn level
const warnLogger = createLogger({
  transports: [
    new transports.File({
      level: 'warn',
      filename: './logs/appWarns.log',
    })
  ],
});

// Create loggers array
const loggers = [infoLogger, errorLogger, warnLogger];

// Log to console if env isn't production
if (process.env.NODE_ENV !== 'production') {
  loggers.forEach((logger) => { 
    logger.add(
      new transports.Console({
        level: 'debug',
        handleExceptions: true,
        format: format.simple()
      })
    );
  });
};


loggers.forEach((logger) => { 
  /**
   * Function to get current date
   * @method getDate
   * @returns {string} e.g: 06/Apr/2020:07:25:26 +0000
   */
  const getDate = () => {
    const dateTime = new Date
    
    /**
     * To ensure any single number is preceded by 0
     * @function pad2
     * @param {number} num number within date/time
     * @returns {string}e.g 01
     */
    function pad2(num) {
      const str = String(num);
        return (str.length === 1 ? '0' : '') + str;
      };
      
    // months array
      const CLF_MONTH = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
      
      const date = dateTime.getUTCDate();
      const hour = dateTime.getUTCHours();
      const mins = dateTime.getUTCMinutes();
      const secs = dateTime.getUTCSeconds();
      const year = dateTime.getUTCFullYear();
      
      const month = CLF_MONTH[dateTime.getUTCMonth()];
      
      return '[' + pad2(date) + '/' + month + '/' + year +
      ':' + pad2(hour) + ':' + pad2(mins) + ':' + pad2(secs) +
      ' +0000]'
  };
  
  logger.getDate = getDate;
  });
    
module.exports = {infoLogger, errorLogger, warnLogger};