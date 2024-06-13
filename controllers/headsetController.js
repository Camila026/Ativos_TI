const Headset = require('../models/Headset');

exports.inserirHeadset = async (req, res) => {
    try {
        const { cpf, tag, modelo, n_serie, caracteristicas, observacoes } = req.body;
        const novoHeadset = new Headset({ cpf, tag, modelo, n_serie, caracteristicas, observacoes });
        await novoHeadset.save();
        res.status(201).json(novoHeadset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.atualizarHeadset = async (req, res) => {
    try {
        const { tag } = req.params;
        const { modelo, n_serie, caracteristicas, observacoes } = req.body;
        const headset = await Headset.findOneAndUpdate({ tag }, { modelo, n_serie, caracteristicas, observacoes }, { new: true });
        res.status(200).json(headset);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.excluirHeadset = async (req, res) => {
    try {
        const { tag } = req.params;
        await Headset.findOneAndDelete({ tag });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
