//favimoveis/casas
//var model = require('../models/casas');
module.exports = function() {
	var controller = {};
  var casas = [
  {_id: 1, nome: 'Contato Exemplo 1',
   email: 'cont1@empresa.com.br', comunidade:'Sao Carlos'},
  {_id: 2, nome: 'Contato Exemplo 2',
   email: 'cont2@empresa.com.br', comunidade:'Sao Carlos'},
  {_id: 3, nome: 'Contato Exemplo 3',
   email: 'cont3@empresa.com.br', comunidade:'Sao Carlos'}
];

    controller.listaCasas = function(req, res) {

    	res.json(casas);
    };
	  
	controller.obtemCasas = function(req, res) {
	  var id = req.params.id;
	  var casaReturn = casas.filter(function(casa) {
	    return casa._id == id;
	  })[0];
	  casaReturn ?
	    res.json(casaReturn) :
	    res.status(404).send('Casas não encontrado');
	};



  return controller;


};
