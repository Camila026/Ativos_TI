const Monitor = require('../models/Monitor');

exports.inserirMonitor = async (req, res) => {
    try {
        const { cpf, tag, modelo, n_serie, polegadas, caracteristicas, observacoes } = req.body;
        const novoMonitor = new Monitor({ cpf, tag, modelo, n_serie, polegadas, caracteristicas, observacoes });
        await novoMonitor.save();
        res.status(201).json(novoMonitor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.atualizarMonitor = async (req, res) => {
    try {
        const { tag } = req.params;
        const { modelo, n_serie, polegadas, caracteristicas, observacoes } = req.body;
        const monitor = await Monitor.findOneAndUpdate({ tag }, { modelo, n_serie, polegadas, caracteristicas, observacoes }, { new: true });
        res.status(200).json(monitor);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.excluirMonitor = async (req, res) => {
    try {
        const { tag } = req.params;
        await Monitor.findOneAndDelete({ tag });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
