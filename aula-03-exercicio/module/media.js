function calcularMedia(nota1, nota2, nota3, nota4){
    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
        return false
    }else if(nota1 < 0 || nota1 > 100 || 
        nota2 < 0 || nota2 > 100|| 
        nota3 < 0 || nota3 > 100 || 
        nota4 < 0 || nota4 > 100){
            return false
    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        return false
    }else{
        let soma = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4);
        let media = soma / 4;
        
        return Number(media.toFixed(2));
    }
}

function definirStatusAluno(media){
    let situacao;
    if(media){
        if(media >= 70){
            situacao = 'Aprovado!!'
        }else if(media >= 50){
            situacao = 'Em recuperação!!'
        }else{
            situacao = 'Reprovado!!'
        }
        return situacao;
    }else{
        return false
    } 
}

module.exports = {
    calcularMedia,
    definirStatusAluno
}