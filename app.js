// NPM modules
const express = require('express');

// Local modules
const { viewEngine, middlewares, routes, errorHandlers } = require('./app_startup/index');

const app = express();

viewEngine(app);

middlewares(app);

routes(app);

errorHandlers(app);


module.exports = app;
