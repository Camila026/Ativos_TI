const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

router.post('/', funcionarioController.inserirFuncionario);
router.put('/:cpf', funcionarioController.atualizarFuncionario);
router.delete('/:cpf', funcionarioController.excluirFuncionario);
router.get('/', funcionarioController.listarFuncionarios);
router.get('/:cpf', funcionarioController.consultarInventario);

module.exports = router;

