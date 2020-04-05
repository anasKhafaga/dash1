// Core modules
const path = require('path');

// NPM modules
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

// Local modules
const { logger } = require('../config/index');

module.exports = (app) => { 
  app.use(morgan('combined', { stream: logger.stream }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
};