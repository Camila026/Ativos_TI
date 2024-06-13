const express = require('express');
const router = express.Router();
const monitorController = require('../controllers/monitorController');

router.post('/', monitorController.inserirMonitor);
router.put('/:tag', monitorController.atualizarMonitor);
router.delete('/:tag', monitorController.excluirMonitor);

module.exports = router;
