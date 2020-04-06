/**
 * View engine modules
 * @module app_startup/viewEngine
 * @requires path
 */
const path = require('path');

/**
 * Function that excute view engine in app.js
 * @function
 * @param {Object} app - The express app
 */
module.exports = (app) => { 
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
};