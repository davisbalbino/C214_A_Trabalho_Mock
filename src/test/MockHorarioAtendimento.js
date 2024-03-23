const professores = require('./professoresConst');

class MockHorarioAtendimento {
    busca(id) {
        if (id == 10) {
            const dadosProfessor = professores.CHRIS;
            dadosProfessor.predio = this.determinarPredio(dadosProfessor.sala); 
            return dadosProfessor;
        } else if (id == 20) {
            const dadosProfessor = professores.KARINA;
            dadosProfessor.predio = this.determinarPredio(dadosProfessor.sala); 
            return dadosProfessor;
        } else if (id == 30) {
            const dadosProfessor = professores.VITORIA;
            dadosProfessor.predio = this.determinarPredio(dadosProfessor.sala);
            return dadosProfessor;
        } else {
            throw new Error("ID inválido: " + id);
        }
    }

    determinarPredio(sala) {
        const salaNum = parseInt(sala);
        if (salaNum >= 1 && salaNum <= 5) {
            return "1";
        } else if (salaNum >= 6 && salaNum <= 10) {
            return "2";
        } else if (salaNum >= 11 && salaNum <= 15) {
            return "3";
        } else if (salaNum >= 16 && salaNum <= 20) {
            return "4";
        } else if (salaNum >= 21 && salaNum <= 25) {
            return "5";
        } else {
            return "6";
        }
    }
}

module.exports = MockHorarioAtendimento;