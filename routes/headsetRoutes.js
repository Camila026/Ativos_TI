const express = require('express');
const router = express.Router();
const headsetController = require('../controllers/headsetController');

router.post('/', headsetController.inserirHeadset);
router.put('/:tag', headsetController.atualizarHeadset);
router.delete('/:tag', headsetController.excluirHeadset);

module.exports = router;
