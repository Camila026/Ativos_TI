const Teclado = require('../models/Teclado');

exports.inserirTeclado = async (req, res) => {
    try {
        const { cpf, tag, modelo, n_serie, caracteristicas, observacoes } = req.body;
        const novoTeclado = new Teclado({ cpf, tag, modelo, n_serie, caracteristicas, observacoes });
        await novoTeclado.save();
        res.status(201).json(novoTeclado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.atualizarTeclado = async (req, res) => {
    try {
        const { tag } = req.params;
        const { modelo, n_serie, caracteristicas, observacoes } = req.body;
        const teclado = await Teclado.findOneAndUpdate({ tag }, { modelo, n_serie, caracteristicas, observacoes }, { new: true });
        res.status(200).json(teclado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.excluirTeclado = async (req, res) => {
    try {
        const { tag } = req.params;
        await Teclado.findOneAndDelete({ tag });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
