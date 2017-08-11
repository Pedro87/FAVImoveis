//favimoveis/casas
//var controller = require('../controllers/casas')
module.exports = function(app) {
  var controller = app.controllers.casas;
  app.get('/casas', controller.listaCasas);
  app.get('/casas/:id', controller.obtemCasas);
};
