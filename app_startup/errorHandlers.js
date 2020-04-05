// NPM modules
const createError = require('http-errors');

// Local Modules
const { logger } = require('../config/index');

module.exports = (app) => {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // log
    logger.error(
      `${req.ip} - - [${logger.getDate()}] - ${err.status || 500} - ${
        err.message
      } - ${req.originalUrl} - ${req.method} - ${req.path}`
    );

    // render the error page
    res.status(err.status || 500);
    res.send('error');
  });

 };