const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema({
    cpf: { type: String, required: true, unique: true },
    nome: { type: String, required: true }
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);
