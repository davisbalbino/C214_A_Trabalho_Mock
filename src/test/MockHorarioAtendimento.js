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
    
} module.exports = MockHorarioAtendimento