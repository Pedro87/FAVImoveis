//favimoveis/casas

var mongoose = require('mongoose');
module.exports = function() {
  var schema = mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    } ,
    descricao: {
      type: String,
      required: true
    } ,
    endereço:{
      type: String,
      required: true
    } ,
    bairro:{
      type: String,
      required: true
    } ,
    cidade:{
      type: String,
      required: true
    } ,
    valor:{
      type: String,
      required: true
    } ,
    area:{
      type: String,
      required: true
    } 
  });

  return mongoose.model('casas', schema);
};
