const Evento = require("../../models/Evento");

const editarEvento = async (req, res) => {
    const { id } = req.params;
    const { nome, descricao, local, qtd_pessoas, data, hora } = req.body;
    try {
        const evento = await Evento.findById(id);

        if (!evento) {
            return res.status(404).json({ message: "Evento não encontrado" });
        }
        evento.nome = nome;
        evento.descricao = descricao;
        evento.local = local;
        evento.qtd_pessoas = qtd_pessoas;
        evento.data = data;
        evento.hora = hora;
        await evento.save();

        return res.status(200).json(evento);
    }
    catch (error) {
        return res.status(500).json({ message: "Erro no servidor", error });
    }
};

module.exports = editarEvento;