const express = require('express');
const Produto = require('../../models/Produto'); // Confirme se o caminho está correto
const router = express.Router();

// Rota para listar todos os produtos
router.get('/', async (req, res) => {
    try {
        const { nome } = req.query; // Obtém o termo de pesquisa da URL
    
        // Se tiver um nome na query, faz a busca filtrada
        const query = nome
          ? { nome: { $regex: nome, $options: "i" } } // Regex para busca parcial (case insensitive)
          : {}; // Se não houver nome, retorna tudo
    
        const produtos = await Produto.find(query); // Busca no banco com ou sem filtro
        res.json(produtos);
      } catch (error) {
        res.status(500).json({ error: "Erro ao buscar produtos" });
      }
});

router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, quantidade, preco, descricao, imagem } = req.body;
  
      const produtoAtualizado = await Produto.findByIdAndUpdate(
        id,
        { nome, quantidade, preco, descricao, imagem },
        { new: true }
      );
  
      if (!produtoAtualizado) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
  
      res.json(produtoAtualizado);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar produto" });
    }
  });
  

// Rota para criar um novo produto
router.post('/', async (req, res) => {
    const { nome, quantidade, preco, descricao, imagem } = req.body;

    try {
        const produto = new Produto({ nome, quantidade, preco, descricao, imagem });
        await produto.save();
        res.status(201).json({ message: 'Produto criado com sucesso', produto });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar produto', error });
    }
});

// Rota para deletar um produto
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Verifica se o ID é válido
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'ID inválido' });
        }

        // Tenta encontrar e deletar o produto
        const deletedProduct = await Produto.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        res.status(200).json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir o produto:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

module.exports = router;

