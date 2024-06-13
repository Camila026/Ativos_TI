const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Rotas
const funcionarioRoutes = require('./routes/funcionarios');
const notebooksRouter = require('./routes/notebooks');
const monitoresRouter = require('./routes/monitores');
// Adicione mais rotas conforme necessário

app.use('/api/funcionarios', funcionarioRouter);
app.use('/api/notebooks', notebooksRouter);
app.use('/api/monitores', monitoresRouter);
// Adicione mais rotas conforme necessário

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

