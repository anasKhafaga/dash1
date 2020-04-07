/**
 * Middlewares module
 * @module app_startup/middlewares
 * @requires path
 * @requires express
 * @requires cookie-parser
 * @requires morgan
 * @requires config/logger
 */

'use strict'
 
// Core modules
const path = require('path');

// NPM modules
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const favicon = require('serve-favicon');

// Local modules
const { infoLogger } = require('../config/index');

/**
 * Function that excute middlewares in app.js
 * @function
 * @param {Object} app - The express app
 */

module.exports = (app) => { 
  app.use(favicon(path.join(process.cwd(), 'public', 'favicon.ico')));
  app.use(morgan('combined', { stream: infoLogger.stream }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(process.cwd(), 'public')));
  app.use('/auth', express.static(path.join(process.cwd(), 'public')));
};