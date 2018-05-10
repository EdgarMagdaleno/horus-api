require('./util/functions');
require('./util/config');
require('./database/connection');

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const api_routes = require('./routes/api_routes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
	if(req.get('Content-Type') !== 'application/json') return bad_request(res);

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
	res.setHeader('Content-Type', 'application/json');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	// res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

app.use('/api', api_routes);

app.use(function(req, res, next) {
	return bad_request(res);
});

http.createServer(app).listen(CONFIG.port, () => {
	console.log(`Listening on: ${CONFIG.port}`);
});