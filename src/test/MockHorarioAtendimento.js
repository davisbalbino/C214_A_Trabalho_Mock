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
        const list = []
        list.push(10)
        list.push(20)
        list.push(30)
        list[10] = professores.CHRIS
        list[20] = professores.KARINA
        list[30] = professores.VITORIA
        return list.includes(id);
    }
    
} module.exports = MockHorarioAtendimento