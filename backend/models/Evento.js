const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  quantidade: { type: Number, required: true },
  preco: { type: Number, required: true },
  descricao: { type: String, required: true }
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;