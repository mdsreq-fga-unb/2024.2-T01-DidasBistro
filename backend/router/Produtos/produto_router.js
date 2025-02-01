const express = require('express');
const Produto = require('../../models/Produto');  // Ajuste conforme necessário
const router = express.Router();

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos', error });
    }
});

// Rota para criar um novo produto
router.post('/', async (req, res) => {
    const { nome, quantidade, preco, descricao } = req.body;

    try {
        const produto = new Produto({ nome, quantidade, preco, descricao });
        await produto.save();
        res.status(201).json({ message: 'Produto criado com sucesso', produto });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar produto', error });
    }

    
});

router.delete('/produtos/:id', async (req, res) => {
    try {
      const productId = req.params.id;
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).send({ message: "Produto não encontrado" });
      }
      res.status(200).send({ message: "Produto excluído com sucesso" });
    } catch (error) {
      console.error("Erro ao excluir o produto:", error);
      res.status(500).send({ message: "Erro ao excluir produto" });
    }
  });

module.exports = router;
