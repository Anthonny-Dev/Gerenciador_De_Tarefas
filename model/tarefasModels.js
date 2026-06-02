const Tarefa = require('../model/tarefasEntity');

class TarefasModel {

    async criar(tituloTarefa, descricao){

        const novaTarefa = new Tarefa({
            tituloTarefa,
            descricao
        });

        return await novaTarefa.save();
    }

    async listar(){
        return await Tarefa.find();
    }

    async buscarPorId(idTarefa){
        return await Tarefa.findById(idTarefa);
    }

    async concluir(idTarefa){

        return await Tarefa.findByIdAndUpdate(
            idTarefa,
            { concluida: true },
            { new: true }
        );

    }

    async excluir(idTarefa){
        return await Tarefa.findByIdAndDelete(idTarefa);
    }

}

module.exports = new TarefasModel();