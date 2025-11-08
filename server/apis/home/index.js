'use strict';

const express = require('express');
const router = express.Router();
const config = require('../../config.js');

/**
 * GET /api/home
 * Returns welcome message
 */
router.get('/', (req, res) => {
  console.log('Home route accessed successfully');
  const welcome = { message: 'Welcome to the coolest API on earth!' };
  res.status(200).json(welcome);
});

module.exports = router;