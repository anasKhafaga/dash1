/**
 * Routes module
 * @module app_startup/routes
 * @requires routes/home
 * @requires routes/users
 */

'use strict'

const {home, users} = require('../routes/index');

/**
 * Function that execute all routes in app.js
 * @function
 * @param {Object} app - The express app
 */
module.exports = (app) => {
  app.use('/', home);
  app.use('/users', users);
 };