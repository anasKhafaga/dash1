/**
 * @module controllers/auth/loginC
 */

'use strict'
const { request, response } = require('express')
module.exports = {
  /**
   * Get login page handler
   * @function loginGet
   * @param {Object}req Client request
   * @param {Object} res Server response
   * @callback next Pass request to the next middleware
   */
  loginGet: (req, res, next) => {
    res.render('auth/login');
  },

  /**
   * Post user input to the server
   * @function loginPost
   * @param {Object}req Client request
   * @param {Object} res Server response
   * @callback next Pass request to the next middleware
   */
  loginPost: (req, res, next) => {},
};
