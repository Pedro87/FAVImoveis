// config/express.js
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();
	// configuração de ambiente
	app.set('port', 3000);
	// middleware

	app.use(bodyParser.urlencoded({extended: true}));
  	app.use(bodyParser.json());
  	app.use(require('method-override')());
	load('models').then('controllers').then('routes').into(app);
  return app;
};
