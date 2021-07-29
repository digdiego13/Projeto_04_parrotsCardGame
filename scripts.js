// START - PROMPT + PUT CARDS ON GAME
const listaCartasTotais = ["bobrossparrot", "bobrossparrot", "explodyparrot", "explodyparrot", "fiestaparrot","fiestaparrot", "metalparrot","metalparrot", "revertitparrot","revertitparrot", "tripletsparrot","tripletsparrot", "unicornparrot", "unicornparrot"];
let cartasNoJogo = [];
let qtdCartas;

function comparador() { 
	return Math.random() - 0.5; 
}

function criarListaJogo(){
    for(let i = 0 ; i < (qtdCartas) ; i++) {
        cartasNoJogo.push(listaCartasTotais[i]);
        cartasNoJogo.sort(comparador);
}
}

function quantidadeCartas() {
    while(qtdCartas < 4 || qtdCartas > 14 || !qtdCartas || qtdCartas%2 !== 0) {
        qtdCartas = Number(prompt("Coloque a quantidade de cartas que deseja jogar:"));      
    }

    criarListaJogo()
    const cartaHTML = document.querySelector(".jogo");
    for(let i = 0 ; i < (qtdCartas) ; i++) {
        cartaHTML.innerHTML += `<li class="carta" onclick="virarCarta(this)">
            <img src="/Arquivos_ext/front.png" class="carta-baixo">
            <img src="/Arquivos_ext/${cartasNoJogo[i]}.gif"/ class="carta-aberta ${cartasNoJogo[i]} escondido">
            </li>`
    }
}
quantidadeCartas()


function virarCarta(elemento) {
   elemento.querySelector(".carta-baixo").classList.toggle("escondido");

   elemento.querySelector(".carta-aberta").classList.toggle("escondido");
   

   
}


        // CONFERIR ALEATORIEDADE NAS CARTAS

// 
