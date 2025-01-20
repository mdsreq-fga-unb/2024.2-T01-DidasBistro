const express = require('express');
const criar_evento = require('../../services/Eventos/criar_evento');

const router = express();

router.post('/criar', criar_evento);

module.exports = router;



