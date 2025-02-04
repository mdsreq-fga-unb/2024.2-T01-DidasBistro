const Evento = require("../../models/Evento");

const remover_acao = async (req, res) => {
  const { id, acaoId } = req.params;

  try {
    const evento = await Evento.findById(id);
    if (!evento) {
      return res.status(404).json({ message: "Evento não encontrado!" });
    }

    evento.acoes = evento.acoes.filter(
      (acao) => acao._id.toString() !== acaoId
    );
    await evento.save();

    return res.status(200).json(evento);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao remover ação!", error });
  }
};

module.exports = remover_acao;
