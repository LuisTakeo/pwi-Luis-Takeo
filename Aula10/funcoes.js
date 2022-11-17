function somaNumeros(n1, n2) {
    return console.log("Resultado da soma de ", n1, " mais ", n2, " é igual a ", n1+n2)
}

somaNumeros(11, 15)

function calculaMedia(nomeDoAluno, nota1, nota2, nota3){
    resultado = (nota1 + nota2 + nota3)/3
    console.log("A nota do aluno ", nomeDoAluno, " é de ", resultado.toFixed(2))
}

calculaMedia("Takeo", 7, 8, 6.6)

const decideNumero = (numero) => { //Arrow Function, função declarada com uma seta
    if(numero > 6) {
        return console.log("O número ", numero, "é maior  que 6.")
    }else if(numero < 6){
        return console.log("O número ", numero, " é menor que 6.")
    }else{
        return console.log("O número ", numero, " é igual que 6.")
    }
}

let numeroDeFora = 15
decideNumero(6)
decideNumero(1)
decideNumero(numeroDeFora)