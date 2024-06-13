const Mouse = require('../models/Mouse');

exports.inserirMouse = async (req, res) => {
    try {
        const { cpf, tag, modelo, n_serie, caracteristicas, observacoes } = req.body;
        const novoMouse = new Mouse({ cpf, tag, modelo, n_serie, caracteristicas, observacoes });
        await novoMouse.save();
        res.status(201).json(novoMouse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.atualizarMouse = async (req, res) => {
    try {
        const { tag } = req.params;
        const { modelo, n_serie, caracteristicas, observacoes } = req.body;
        const mouse = await Mouse.findOneAndUpdate({ tag }, { modelo, n_serie, caracteristicas, observacoes }, { new: true });
        res.status(200).json(mouse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.excluirMouse = async (req, res) => {
    try {
        const { tag } = req.params;
        await Mouse.findOneAndDelete({ tag });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
