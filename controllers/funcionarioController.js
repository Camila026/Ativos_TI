const Funcionario = require('../models/Funcionario');

exports.inserirFuncionario = async (req, res) => {
    try {
        const { cpf, nome } = req.body;
        const novoFuncionario = new Funcionario({ cpf, nome });
        await novoFuncionario.save();
        res.status(201).json(novoFuncionario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.excluirFuncionario = async (req, res) => {
    try {
        const { cpf } = req.params;
        await Funcionario.findOneAndDelete({ cpf });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.listarFuncionarios = async (req, res) => {
    try {
        const funcionarios = await Funcionario.find();
        res.status(200).json(funcionarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.atualizarFuncionario = async (req, res) => {
    try {
        const { cpf } = req.params;
        const { nome } = req.body;
        const funcionario = await Funcionario.findOneAndUpdate({ cpf }, { nome }, { new: true });
        res.status(200).json(funcionario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.consultarInventario = async (req, res) => {
    try {
        const { cpf } = req.params;
        const funcionario = await Funcionario.findOne({ cpf });
        res.status(200).json(funcionario);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
