const ProdutoService = require('../services/Produto/produtoService');

exports.criarProduto = async (req, res) => {
  try {
    const produto = await ProdutoService.criarProduto(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
};

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await ProdutoService.listarProdutos();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
};

exports.buscarProdutoPorId = async (req, res) => {
  try {
    const produto = await ProdutoService.buscarProdutoPorId(req.params.id);
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
};

exports.atualizarProduto = async (req, res) => {
  try {
    const produto = await ProdutoService.atualizarProduto(req.params.id, req.body);
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
};

exports.deletarProduto = async (req, res) => {
  try {
    await ProdutoService.deletarProduto(req.params.id);
    res.json({ message: 'Produto removido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
};
