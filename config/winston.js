const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: './logs/app.log',
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true
    })
  ],
  exitOnError: false
});

logger.stream = {
  write: function (message, encoding) { 
    logger.info(message);
  }
};

logger.getDate = function () {
  const dateTime = new Date

  function pad2(num) {
    const str = String(num);
    return (str.length === 1 ? '0' : '') + str;
  };

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

  return pad2(date) + '/' + month + '/' + year +
    ':' + pad2(hour) + ':' + pad2(mins) + ':' + pad2(secs) +
    ' +0000'
};

module.exports = logger;