const Notebook = require('../models/Notebook');

exports.inserirNotebook = async (req, res) => {
    try {
        const { cpf, tag, modelo, n_serie, versao_so, caracteristicas, observacoes } = req.body;
        const novoNotebook = new Notebook({ cpf, tag, modelo, n_serie, versao_so, caracteristicas, observacoes });
        await novoNotebook.save();
        res.status(201).json(novoNotebook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.atualizarNotebook = async (req, res) => {
    try {
        const { tag } = req.params;
        const { modelo, n_serie, versao_so, caracteristicas, observacoes } = req.body;
        const notebook = await Notebook.findOneAndUpdate({ tag }, { modelo, n_serie, versao_so, caracteristicas, observacoes }, { new: true });
        res.status(200).json(notebook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.excluirNotebook = async (req, res) => {
    try {
        const { tag } = req.params;
        await Notebook.findOneAndDelete({ tag });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
