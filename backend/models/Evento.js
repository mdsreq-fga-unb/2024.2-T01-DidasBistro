const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AcaoSchema = new Schema({
  tipo: { type: String, enum: ["entrada", "saida"], required: true },
  descricao: { type: String, required: true },
  valor: { type: Number, required: true },
  data: { type: Date, default: Date.now },
});

const EventoSchema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  local: { type: String, required: true },
  qtd_pessoas: { type: Number, required: true },
  data: { type: Date, required: true },
  hora: { type: String, required: true },
  acoes: [AcaoSchema], // Utilizando subdocumento corretamente
});

module.exports = mongoose.model("Evento", EventoSchema);
