
const mongoose = require('mongoose');
const { type } = require('os');
//const { type } = require('os');

mongoose.connect('mongodb://localhost:27017/gerenciador_tarefas');

const tarefaSchema = new mongoose.Schema({
    idTarefa: {
        type: String,
        autoIncrement: true,
        primaryKey: true
    },
    
    tituloTarefa: {
        type: String,
        allowNull: false
    },
    descricaoTarefa: {
        type: String,
        allowNull: false
    },
    concluida: {
        type: Boolean,
        default: false
    },
    dataCriacaoTarefa:{
        type: Date,
        default: Date.now
    }
});

const usuarioSchema = new mongoose.Schema({
    idUser: {
        type: String,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeUser: {
        type: String,
        allowNull: false,
    },

    emailUser: {
        type: String,
        allowNull: false,
        unique: true
    },

    senhaUser: {
        type: String,
        allowNull: false        
    }
});

module.exports = mongoose.model('Tarefa', tarefaSchema);
module.exports = mongoose.model('Usuario', usuarioSchema);