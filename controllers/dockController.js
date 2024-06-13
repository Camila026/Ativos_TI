const Dock = require('../models/Dock');

exports.inserirDock = async (req, res) => {
    try {
        const { cpf, tag, modelo, n_serie, caracteristicas, observacoes } = req.body;
        const novoDock = new Dock({ cpf, tag, modelo, n_serie, caracteristicas, observacoes });
        await novoDock.save();
        res.status(201).json(novoDock);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.atualizarDock = async (req, res) => {
    try {
        const { tag } = req.params;
        const { modelo, n_serie, caracteristicas, observacoes } = req.body;
        const dock = await Dock.findOneAndUpdate({ tag }, { modelo, n_serie, caracteristicas, observacoes }, { new: true });
        res.status(200).json(dock);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.excluirDock = async (req, res) => {
    try {
        const { tag } = req.params;
        await Dock.findOneAndDelete({ tag });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
