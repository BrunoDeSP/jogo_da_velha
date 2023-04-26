let turn = "circle"
let quadrado = ""
const quadrados = Array.prototype.slice.call(document.getElementsByClassName('square'))  
const lista = [
    quadradoUm = {
        fundo : ""
    },
    quadradoDois = {
        fundo : ""
    },
    quadradoTres = {
        fundo : ""
    },
    quadradoQuatro = {
        fundo : ""
    },
    quadradoCinco = {
        fundo : ""
    },
    quadradoSeis = {
        fundo : ""
    },
    quadradoSete = {
        fundo : ""
    },
    quadradoOito = {
        fundo : ""
    },
    quadradoNove = {
        fundo : ""
    },
]

function trocar(name) {
    const figure = Array.prototype.slice.call(document.getElementsByClassName(`square--${name}`))
    const position = quadrados.indexOf(figure[0])
    const verificacao = quadrados[position].className == `square square--${name}` ? true : false
    const ultimaForma = figure[0] == quadrado ? true : false
    
    if(ultimaForma) {
        if(turn == "circle") {
            figure[0].classList.remove("activeCrucifix")
            turn = "crucifix"
        } else {
            figure[0].classList.remove("activeCircle")
            turn = "circle"
        }
        quadrado = ""
        } else {
            if(verificacao) {
                if (turn == "circle") {
                    figure[0].classList.add("activeCircle")
                    turn = "crucifix"
                    quadrado = figure[0]
                } else {
                    figure[0].classList.add("activeCrucifix")
                    turn = "circle"  
                    quadrado = figure[0]    
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







