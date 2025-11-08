'use strict';

const express = require('express');
const router = express.Router();
const config = require('../../config.js');

/**
 * GET /api/users
 * Returns user configuration information
 */
router.get('/', (req, res) => {
  console.log('Users route accessed successfully');
  const userConfig = [];
  userConfig.push({ "mock": config.mock })
  res.status(200).json(userConfig);
});

module.exports = router;