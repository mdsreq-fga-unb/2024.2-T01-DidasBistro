const Evento = require("../../models/Evento");
const mongoose = require("mongoose"); // Importar para manipular ObjectId
const PDFDocument = require("pdfkit"); // Biblioteca para gerar PDF

const gerar_relatorio = async (req, res) => {
  try {
    let { id } = req.params;
    console.log("ID recebido:", id); // Verificar o que chega

    // Verificar se o ID é um ObjectId válido antes de buscar no banco
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const evento = await Evento.findById(id);
    if (!evento) {
      return res.status(404).json({ message: "Evento não encontrado" });
    }

    // Criar um novo documento PDF
    const doc = new PDFDocument();
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=relatorio_${evento.nome}.pdf`
    );
    res.setHeader("Content-Type", "application/pdf");

    // Gerar o conteúdo do PDF
    doc.pipe(res);
    doc
      .fontSize(20)
      .text(`Relatório do Evento: ${evento.nome}`, { align: "center" });
    doc.moveDown();
    doc.fontSize(14).text(`Descrição: ${evento.descricao}`);
    doc.text(`Local: ${evento.local}`);
    doc.text(`Quantidade de Pessoas: ${evento.qtd_pessoas}`);
    doc.text(`Data: ${evento.data.toLocaleDateString("pt-br")}`);
    doc.text(`Hora: ${evento.hora}`);
    doc.moveDown();

    doc.fontSize(16).text("Movimentações:", { underline: true });
    evento.acoes.forEach((acao, index) => {
      doc.moveDown();
      doc.fontSize(12).text(`#${index + 1} - ${acao.tipo.toUpperCase()}`);
      doc.text(`Descrição: ${acao.descricao}`);
      doc.text(`Valor: R$ ${acao.valor.toFixed(2)}`);
      doc.text(`Data: ${acao.data.toLocaleDateString()}`);
    });

    // saldo atual
    const saldo = evento.acoes.reduce((acc, acao) => {
      return acao.tipo === "entrada" ? acc + acao.valor : acc - acao.valor;
    }, 0);

    doc.moveDown();

    doc.fontSize(16).text("Saldo Atual:", { underline: true });

    doc.fontSize(14).text(`R$ ${saldo.toFixed(2)}`, {
      align: "center",
      color: saldo >= 0 ? "green" : "red",
    });
    doc.moveDown();

    doc.end(); // Finalizar o documento PDF
  } catch (error) {
    console.error("Erro ao gerar relatório:", error);
    res
      .status(500)
      .json({ message: "Erro ao gerar relatório", error: error.message });
  }
};

module.exports = gerar_relatorio;
