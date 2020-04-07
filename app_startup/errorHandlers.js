/**
 * Error handler module
 * @module app_startup/errorHandlers
 * @requires http-errors
 * @requires config/logger
 */

'use strict'

// NPM modules
const createError = require('http-errors');
const debug = require('debug')('app:errorHandler');

// Local Modules
const { errorLogger } = require('../config/index');

/**
 * Handle any error concerning process
 * @function processErrorHandler
 */
const processErrorHandler = () => {
  process.on('exit', (message) => { 
    errorLogger.error(`${message} - - ${errorLogger.getDate()}`);
  });

  process.on('uncaughtException', (err) => {
    debug(err.message);
    process.emit('exit', err.message);
  });

  process.on('unhandledRejection', (reason) => {
    debug(reason);
    process.emit('exit', reason);
  });
};

/**
 * Function that excute errorHandler in app.js
 * @function
 * @param {Object} app - The express app
 */
const errorHandler = (app) => {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(
    /**
     * Final destination to any error exported to the client
     * @param {Object} err Catched error object
     * @param {Object} req Client request object
     * @param {Object} res Client response object
     * @param {Object} next
     */
    function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('404');
    }
  );
};

module.exports = {
  errorHandler,
  processErrorHandler
}
