// favimoveis/server.js
var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://admin:master123@ds129153.mlab.com:29153/favimoveis');
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' +
              app.get('port'));
});