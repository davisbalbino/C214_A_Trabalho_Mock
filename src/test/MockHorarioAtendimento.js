class MockHorarioAtendimento {
    busca(id){
        if(id==10){
            
            return {
                nomeDoProfessor: "Chris",
                horarioDeAtendimento: "19:30",
                periodo: "noturno",
                sala: "1",
                predio: "1",
              };
        }else if(id ==20){
            return {
                nomeDoProfessor: "Karina",
                horarioDeAtendimento: "10:00",
                periodo: "integral",
                sala: "6",
                predio: "2",
              };
        }else if(id == 30){
            return {
                nomeDoProfessor: "Vitoria",
                horarioDeAtendimento: "15:30",
                periodo: "integral",
                sala: "11",
                predio: "3",
              };
        }else{
            throw new Error("ID inválido: " + id);
        }
    }
} module.exports = MockHorarioAtendimento