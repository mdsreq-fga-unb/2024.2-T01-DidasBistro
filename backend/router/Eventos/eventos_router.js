const express = require("express");
const criar_evento = require("../../services/Eventos/criar_evento");
const get_eventos = require("../../services/Eventos/get_eventos");
const adicionar_acao = require("../../services/Eventos/adicionar_acao");
const remover_acao = require("../../services/Eventos/remover_acao");
const get_evento_por_id = require("../../services/Eventos/get_eventos_pr_id");

const router = express.Router();

router.post("/criar", criar_evento);
router.get("/", get_eventos);
router.get("/:id", get_evento_por_id);
router.post("/:id/adicionar-acao", adicionar_acao);
router.delete("/:id/remover-acao/:acaoId", remover_acao);

module.exports = router;
