const express = require('express');
const router = express.Router();
const mouseController = require('../controllers/mouseController');

router.post('/', mouseController.inserirMouse);
router.put('/:tag', mouseController.atualizarMouse);
router.delete('/:tag', mouseController.excluirMouse);

module.exports = router;
