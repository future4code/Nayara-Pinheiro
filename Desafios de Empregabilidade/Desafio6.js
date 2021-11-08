//Faça um programa para ler o ano atual e o ano de nascimento de uma pessoa. Imprimir uma mensagem que diga se ela poderá ou não votar este ano.

const podeVotar = (anoAtual, anoNascimento) => {
    const maiorDe18 = anoAtual - anoNascimento;

    if (maiorDe18 >= 18){
        return "Pode votar"
    }else{
        return "Não pode voltar"
    }
}

