'use strict';

var express = require('express');
var path = require('path');
var config = require('./config.js');

var app = express();

app.use(express.static(path.join('..', 'client')));

require('./routes')(app);

var server = app.listen(config.port, function(){
 	var port = server.address().port;
 	console.log('\nExpress server listening on port ' + port + ', in ' + config.env + ' mode');
	console.log("open http://localhost:"+ port);
})

server.on('error', function(e){
	if(e.code === 'EADDRINUSE') {
		console.log('ADDRESS IN USE');
		console.log('\nExpress server listening on port ' + e.port + ', in ' + config.env + ' mode')
	} else {
		process.exit(1);
	}
})