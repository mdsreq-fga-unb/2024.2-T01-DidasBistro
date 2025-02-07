const Evento = require("../../models/Evento");

const get_evento_por_id = async (req, res) => {
  const { id } = req.params;
  try {
    const evento = await Evento.findById(id);
    if (!evento) {
      return res.status(404).json({ message: "Evento não encontrado" });
    }
    return res.status(200).json(evento);
  } catch (error) {
    return res.status(500).json({ message: "Erro no servidor", error });
  }
};

module.exports = get_evento_por_id;
