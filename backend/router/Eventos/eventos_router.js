const express = require('express');
const criar_evento = require('../../services/Eventos/criar_evento');
const get_eventos = require('../../services/Eventos/get_eventos');

const router = express();

router.post('/criar', criar_evento);
router.get('/', get_eventos);

module.exports = router;