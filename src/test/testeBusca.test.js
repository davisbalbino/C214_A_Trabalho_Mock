const MeuServicoMock = require('./MockHorarioAtendimento');

describe('TesteMockServiço', () => {
    it('deve retornar os dados do professor com ID 10', () => {
        const meuServicoMock = new MeuServicoMock();
        const dados = meuServicoMock.busca(10);
        expect(dados).toEqual({
            nomeDoProfessor: "Chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: "1",
            predio: "1",
        });
    });
    it('deve retornar os dados do professor com ID 10', () => {
        const meuServicoMock = new MeuServicoMock();
        const dados = meuServicoMock.busca(10);
        expect(dados).toEqual({
            nomeDoProfessor: "Chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: "1",
            predio: "1",
        });
    });
    it('deve retornar os dados do professor com ID 10', () => {
        const meuServicoMock = new MeuServicoMock();
        const dados = meuServicoMock.busca(10);
        expect(dados).toEqual({
            nomeDoProfessor: "Chris",
            horarioDeAtendimento: "19:30",
            periodo: "noturno",
            sala: "1",
            predio: "1",
        });
    });

});
