'use strict';

const path = require('path');

const config = require('./config.js');

/**
 * Configures application routes and middleware
 * @param {express.Application} app - Express application instance
 */
const routing = (app) => {
  app.use('/api/', require('./apis/authenticate/index'));
  app.use('/api/home', require('./apis/home/index'));
  app.use('/api/users', require('./apis/users/index'));


  app.route('/version').get((req, res) => {
    const pkg = require("../package.json");
    const data = {
      name: pkg.name,
      version: pkg.version,
      port: config.port,
      hostname: config.hostname,
      mode: config.env,
      mock: config.mock
    }
    res.json(data);
  });

  // All other routes should redirect to the index.html
  app.route('/*').get(function (req, res) {
    res.sendFile(path.resolve(__dirname,'..', 'client' + '/index.html'));
  });
};

module.exports = routing;