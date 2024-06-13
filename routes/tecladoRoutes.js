const express = require('express');
const router = express.Router();
const tecladoController = require('../controllers/tecladoController');

router.post('/', tecladoController.inserirTeclado);
router.put('/:tag', tecladoController.atualizarTeclado);
router.delete('/:tag', tecladoController.excluirTeclado);

module.exports = router;
