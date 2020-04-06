/**
 * Middlewares module
 * @module app_startup/middlewares
 * @requires path
 * @requires express
 * @requires cookie-parser
 * @requires morgan
 * @requires config/logger
 */

// Core modules
const path = require('path');

// NPM modules
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Local modules
const { infoLogger } = require('../config/index');

/**
 * Function that excute middlewares in app.js
 * @function
 * @param {Object} app - The express app
 */

module.exports = (app) => { 
  app.use(morgan('combined', { stream: infoLogger.stream }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
};