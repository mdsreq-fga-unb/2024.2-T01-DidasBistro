const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  quantidade: { type: Number, required: true },
  preco: { type: Number, required: true },
  descricao: { type: String, required: true },
  imagem: { type: String, required: false }
});

const Produto = mongoose.models.Produto || mongoose.model('Produto', produtoSchema);

module.exports = Produto;