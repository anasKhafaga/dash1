/**
 * The Express app
 * @module app
 * @requires app_startup/viewEngine
 * @requires app_startup/middlewares
 * @requires app_startup/routes
 * @requires app_startup/errorHandlers
 * @requires express
 */

'use strict'
 
// NPM modules
const express = require('express');

// Local modules
const {
  viewEngine,
  middlewares,
  routes,
  errorHandler,
  processErrorHandler } = require('./app_startup/index');

const app = express();

processErrorHandler();

middlewares(app);
viewEngine(app);
routes(app);
errorHandler(app);

module.exports = app;
