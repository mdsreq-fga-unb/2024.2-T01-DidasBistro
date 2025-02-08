const Produto = require('../models/produto');

const criarProduto = async (dados) => {
  const novoProduto = new Produto(dados);
  return await novoProduto.save();
};

const listarProdutos = async () => {
  return await Produto.find();
};

const buscarProdutoPorId = async (id) => {
  return await Produto.findById(id);
};

const atualizarProduto = async (id, dados) => {
  return await Produto.findByIdAndUpdate(id, dados, { new: true });
};

const deletarProduto = async (id) => {
  return await Produto.findByIdAndDelete(id);
};

module.exports = { criarProduto, listarProdutos, buscarProdutoPorId, atualizarProduto, deletarProduto };
