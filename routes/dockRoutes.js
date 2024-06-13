const express = require('express');
const router = express.Router();
const dockController = require('../controllers/dockController');

router.post('/', dockController.inserirDock);
router.put('/:tag', dockController.atualizarDock);
router.delete('/:tag', dockController.excluirDock);

module.exports = router;
