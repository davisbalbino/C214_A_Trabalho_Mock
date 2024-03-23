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
   
    it('deve retornar Karina no resultado nomeDoProfessor para o ID 20', () => {
        const meuServicoMock = new MeuServicoMock();
        const dados = meuServicoMock.busca(20);
        expect(dados.nomeDoProfessor).toEqual("Karina");
    });

    it('deve retornar um erro', () => {
        const meuServicoMock = new MeuServicoMock();
        expect(() => {
            meuServicoMock.busca(0);
        }).toThrow();
    });

    it('A sala deve ser 11 com Id 30', () => {
        const meuServicoMock = new MeuServicoMock();
        const dados = meuServicoMock.busca(30);
        expect(dados.sala).toEqual("11");
    });
   
   
    

});
