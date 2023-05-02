let turn = "circle"
let quadrado = ""
const quadrados = Array.prototype.slice.call(document.getElementsByClassName('square'))  
const lista = [
    quadradoUm = {
        nome: "one",
        fundo : ""
    },
    quadradoDois = {
        nome: "two",
        fundo : ""
    },
    quadradoTres = {
        nome: "three",
        fundo : ""
    },
    quadradoQuatro = {
        nome: "four",
        fundo : ""
    },
    quadradoCinco = {
        nome: "five",
        fundo : ""
    },
    quadradoSeis = {
        nome: "six",
        fundo : ""
    },
    quadradoSete = {
        nome: "seven",
        fundo : ""
    },
    quadradoOito = {
        nome: "eight",
        fundo : ""
    },
    quadradoNove = {
        nome: "nine",
        fundo : ""
    },
]

function trocar(name) {
    const figure = Array.prototype.slice.call(document.getElementsByClassName(`square--${name}`))
    const position = quadrados.indexOf(figure[0])
    const verificacao = quadrados[position].className == `square square--${name}` ? true : false
    const ultimaForma = figure[0] == quadrado ? true : false
    // const inserirForma = lista.find( item => item.nome == '')

    if(ultimaForma) {
        if(turn == "circle") {
            figure[0].classList.remove("activeCrucifix")
            turn = "crucifix"
            retirarForma(name)
        } else {
            figure[0].classList.remove("activeCircle")
            turn = "circle"
            retirarForma(name)
        }
        quadrado = ""
        } else {
            if(verificacao) {
                if (turn == "circle") {
                    figure[0].classList.add("activeCircle")
                    turn = "crucifix"
                    quadrado = figure[0]
                    inserirForma(name, "circle")                
                } else {
                    figure[0].classList.add("activeCrucifix")
                    turn = "circle"  
                    quadrado = figure[0]                       
                    inserirForma(name, "crucifix")                
            }    
        }
    }
}

function reiniciar() {
    for(i = 0; i < 9; i++) {
        quadrados[i].classList.remove("activeCrucifix")
        quadrados[i].classList.remove("activeCircle")
    }    
}

// function acharGanhador() {
    
// }

function inserirForma(name, figure) {
    const inserindo = lista.find(item => item.nome == name)
    inserindo.fundo = figure    
}

function retirarForma(name) {
    const retirando = lista.find(item => item.nome == name)
    retirando.fundo = ""
}
// console.log(arrayCrucifixo)





