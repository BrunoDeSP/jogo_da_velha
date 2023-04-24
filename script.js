let turn = "circle"
let quadrado = ""
console.log(turn)

function trocar(name) {
    const figure = document.getElementsByClassName(`square--${name}`)
    // const resolucao = quadrado == figure[0] ? 'true' : 'false'
    // quadrado = figure[0]
    // console.log(resolucao)
    if (quadrado == figure[0]) {
        if(turn == "circle") {
            turn = "crucifix"
            quadrado.classList.remove("activeCrucifix")
            quadrado = ""    
        } else { 
            turn = "circle"
            quadrado.classList.remove("activeCircle")
            quadrado = ""
        }
    } else {
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
    
    console.log(turn)
}