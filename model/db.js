const mongoose = require('mongoose');

async function conectarBanco() {
    try {
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/gerenciador_tarefas'
        );

        console.log('MongoDB conectado!');
    }
    catch(error){
        console.error('Erro ao conectar:', error);
    }
}

module.exports = conectarBanco;

async function conectarBanco() {
    try {
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/gerenciador_tarefas'
        );

        console.log('MongoDB conectado!');
    }
    catch(error){
        console.error('Erro ao conectar:', error);
    }
}

module.exports = conectarBanco;