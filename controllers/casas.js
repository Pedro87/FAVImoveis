//favimoveis/casas
//var model = require('../models/casas');
module.exports = function(app) {
	var casas = app.models.casas
	var controller = {};
	
 	controller.listaCasas = function(req, res) {
 		casas.find().exec().then(
    function(casas_res) {
       res.json(casas_res);
     },
     function(erro) {
       console.error(erro);
       res.status(500).json(erro);
     }
);
 	};
	controller.obtemCasas = function(req, res) {
		var comunidade = req.params.comunidade;
		var _id = req.params.id;
		casas.find({"comunidade":comunidade, "_id": _id}).exec().then(
    function(casas_res) {
       res.json(casas_res);
     },
     function(erro) {
       console.error(erro);
       res.status(500).json(erro);
     }
);
	};
  return controller;
};
