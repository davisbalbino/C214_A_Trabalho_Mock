class BuscaHorarioAtendimento {
    constructor(servicoRemoto) {
        this.servicoRemoto = servicoRemoto;
    }

    async buscarHorarioProfessor(id) {
        try {
            const resposta = await this.servicoRemoto.buscar(id);
            let horarioProfessor = JSON.parse(resposta);
            horarioProfessor.predio = this.determinarPredio(horarioProfessor.sala);
            return horarioProfessor;
        } catch (erro) {
            throw new Error("Erro ao buscar horário do professor: " + erro.message);
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
} module.exports = BuscaHorarioAtendimento