const Evento = require("../../models/Evento");

const adicionar_acao = async (req, res) => {
  const { id } = req.params;
  const { tipo, descricao, valor } = req.body;

  if (!tipo || !descricao || !valor) {
    return res
      .status(400)
      .json({ message: "Preencha todos os campos da ação!" });
  }

  try {
    const evento = await Evento.findById(id);
    if (!evento) {
      return res.status(404).json({ message: "Evento não encontrado!" });
    }

    evento.acoes.push({ tipo, descricao, valor });
    await evento.save();

    return res.status(200).json(evento);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao adicionar ação!", error });
  }
};

module.exports = adicionar_acao;
