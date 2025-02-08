const Evento = require("../../models/Evento");

const deletar_evento = async (req, res) => {
    const { id } = req.params;
    
    try {
        const evento = await Evento.findByIdAndDelete(id);
    
        if (!evento) {
        return res.status(404).json({ message: "Evento não encontrado" });
        }
    
        res.json({ message: "Evento deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

    module.exports = deletar_evento;