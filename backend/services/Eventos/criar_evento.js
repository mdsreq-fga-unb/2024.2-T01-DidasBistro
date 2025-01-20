const Evento = require("../../models/Evento");

const criar_evento = async (req, res) => {
    const {nome, data, descricao, local, qtd_pessoas, hora} = req.body;
    if (!nome || !data || !descricao || !local || !qtd_pessoas || !hora) {
        return res.status(400).json({message: 'Preencha todos os campos!'});
    }
    const novo_evento = await Evento.create({nome, data, descricao, local, qtd_pessoas, hora});
    if (!novo_evento) {
        return res.status(500).json({message: 'Erro ao criar evento!'});
    }
    return res.status(201).json(novo_evento);

}

module.exports = criar_evento;