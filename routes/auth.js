/**
 * Authentication router
 * @module routes/auth
 * @requires controllers/auth/loginC
 */

'use strict'
 
const express = require('express');
const router = express.Router();
const { loginGet, loginPost } = require('../controllers');

/* GET login page. */
router.get('/login', loginGet);

/* POST login */
router.post('/login', loginPost);

module.exports = router;
