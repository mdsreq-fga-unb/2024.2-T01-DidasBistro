const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    local: {
        type: String,
        required: true
    },
    qtd_pessoas: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Evento', EventoSchema);