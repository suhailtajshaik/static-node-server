'use strict';

const express = require('express');
const path = require('path');
const config = require('./config.js');

const app = express();

app.use(express.static(path.join('..', 'client')));
require('./routes')(app);

// catch 404 and forward to error handler.
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// If our applicatione encounters an error, we'll display the error and stacktrace accordingly.
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.send(err);
});

const server = app.listen(config.port, function () {
	var port = server.address().port;
	console.log('\nExpress server listening on port ' + port + ', in ' + config.env + ' mode');
	console.log("open http://localhost:" + port);
})

server.on('error', function (e) {
	if (e.code === 'EADDRINUSE') {
		console.log('ADDRESS IN USE');
		console.log('\nExpress server listening on port ' + e.port + ', in ' + config.env + ' mode')
	} else {
		process.exit(1);
	}
})