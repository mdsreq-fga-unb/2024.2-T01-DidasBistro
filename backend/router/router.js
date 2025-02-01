const express = require('express');

const router = express();

router.use('/eventos', require('./Eventos/eventos_router'));

router.use('/produtos', require('./Produtos/produto_router'));

router.get('/', (req, res) => { res.send('Hello World') });

module.exports = router;