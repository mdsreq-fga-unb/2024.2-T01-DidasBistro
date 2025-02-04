const Evento = require("../../models/Evento");

const deletar_acao = async (req, res) => {
  const { id, id_acao } = req.params;

  const evento = await Evento.findById(id);
  if (!evento) {
    return res.status(404).json({ message: "Evento não encontrado" });
  }

  const acao_p_deletar = evento.acoes.find((acao) => acao._id == id_acao);
  if (!acao_p_deletar) {
    return res.status(404).json({ message: "Ação não encontrada" });
  }

  evento.acoes = evento.acoes.filter((acao) => acao._id != id_acao);

  try {
    await evento.save();
    res.json(evento);
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar ação" });
  }
};

module.exports = deletar_acao;
