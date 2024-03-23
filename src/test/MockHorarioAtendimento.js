const professores = require('./professoresConst');

class MockHorarioAtendimento {
    busca(id){
        if(id==10){
            
            return professores.CHRIS
        }else if(id ==20){
            return professores.KARINA

        }else if(id == 30){
            return professores.VITORIA
        }else{
            throw new Error("ID inválido: " + id);
        }
    }
    professorExists(id) {
        const list = [10,20,30]
        return list.includes(id);
    }
    
} module.exports = MockHorarioAtendimento