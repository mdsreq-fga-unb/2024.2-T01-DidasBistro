const Evento = require("../../models/Evento");

const get_eventos = async (req, res) => {
    const eventos = await Evento.find();

    if(eventos.length === 0) {
        return res.status(200).json({
            message: "Não há eventos cadastrados no sistema."
        });
    }

    return res.status(200).jsonp({
        eventos: eventos
    })
}

module.exports = get_eventos;