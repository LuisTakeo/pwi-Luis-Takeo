
function multi(x){
    return function(y){
        return x * y
    }
}

function tabuadaCompleta(){
    let x
    let y
    let multi2
    let textoT1 = ""
    let textoT2 = ""
    let textoT3 = ""
    for(x = 1; x <= 10; x++){
        console.log(`Tabuada do ${x}`);
        textoT1 = `Tabuada do ${x}:\n`
        for(y = 1; y <= 10; y++){
            multi2 = multi(x)
            console.log(`${x} * ${y} = ${multi2(y)}`)
            textoT2 += `${x} * ${y} = ${multi2(y)}\n`
        }
        textoT3 += textoT1 + textoT2
        textoT2 = ""
    }
    document.getElementById("TabuadaCompleta").innerText = textoT3
    
}


function tabuadaEscolha(x){
    let texto1 = `Tabuada do ${x} \n`
    let texto2 = ""
    for(let y = 1; y <= 10; y++){
        let multi2 = multi(x)
        console.log(`${x} * ${y} = ${multi2(y)}`)
        texto2 += `${x} * ${y} = ${multi2(y)} \n`
    }
    document.getElementById("Tabuada").innerText = texto1 + texto2
}

const calculaTabuada = () => {
    let x = Number(prompt("Calculador de tabuada. Insira um número")) // Lembrete: vou criar uma pagina com um botão que vai receber um valor, calcular uma tabuada e jogar na tela
    if(x === Number(x)){
        tabuadaEscolha(x)
    }else{
        console.log("Não é um número.")
        alert("Não é um número")
        calculaTabuada()
    }
}

//tabuada()