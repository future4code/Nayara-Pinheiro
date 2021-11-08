// Faça um programa para ler a hora de início e a hora de fim de um jogo de Xadrez e calcular a duração do jogo em horas. Considere:
// - Apenas horas inteiras, sem os minutos.
// - O tempo máximo de duração do jogo é de 24 horas e o jogo pode iniciar em um dia e terminar no dia seguinte

const tempoDaPartida = (horaInicio, horaFinal) => {
    if(horaFinal < horaInicio) {
        return horaFinal - horaInicio +24;
    }else{
        return horaFinal - horaInicio
    }
};