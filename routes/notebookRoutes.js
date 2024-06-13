const express = require('express');
const router = express.Router();
const notebookController = require('../controllers/notebookController');

router.post('/', notebookController.inserirNotebook);
router.put('/:tag', notebookController.atualizarNotebook);
router.delete('/:tag', notebookController.excluirNotebook);

module.exports = router;
