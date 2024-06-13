const mongoose = require('mongoose');

const DockSchema = new mongoose.Schema({
    cpf: { type: String, required: true },
    tag: { type: String, required: true, unique: true },
    modelo: { type: String, required: true },
    n_serie: { type: String, required: true },
    caracteristicas: { type: String, required: true },
    observacoes: { type: String, required: true }
});

module.exports = mongoose.model('Dock', DockSchema);
