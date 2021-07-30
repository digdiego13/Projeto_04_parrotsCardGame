// START - PROMPT + PUT CARDS ON GAME
const listaCartasTotais = ["bobrossparrot", "bobrossparrot", "explodyparrot", "explodyparrot", "fiestaparrot","fiestaparrot", "metalparrot","metalparrot", "revertitparrot","revertitparrot", "tripletsparrot","tripletsparrot", "unicornparrot", "unicornparrot"];
let cartasNoJogo = [];
let qtdCartas;
let cartasAbertas = [];
let cartasFechadas = [];
let numJogadas = 0;

function comparador() { 
	return Math.random() - 0.5; 
}

function criarListaJogo(){
    for(let i = 0 ; i < (qtdCartas) ; i++) {
        cartasNoJogo.push(listaCartasTotais[i]);
}
cartasNoJogo.sort(comparador);
cartasFechadas = cartasNoJogo;
}

function quantidadeCartas() {
    while(qtdCartas < 4 || qtdCartas > 14 || !qtdCartas || qtdCartas%2 !== 0) {
        qtdCartas = Number(prompt("Coloque a quantidade de cartas que deseja jogar:"));      
    }

    criarListaJogo()
    const cartaHTML = document.querySelector(".jogo");
    for(let i = 0 ; i < (qtdCartas) ; i++) {
        cartaHTML.innerHTML += `<li class="carta" onclick="abrirCarta(this)">
            <img src="/Arquivos_ext/front.png" class="carta-baixo ${cartasNoJogo[i]}">
            <img src="/Arquivos_ext/${cartasNoJogo[i]}.gif"/ class="carta-aberta ${cartasNoJogo[i]} escondido">
            </li>`
    }
}
setTimeout(quantidadeCartas, 1000);

function adicionarALista (elemento) {
    let idCartaLista = elemento.querySelector(".carta-aberta").classList;
    let idCarta = idCartaLista[1];
    cartasAbertas.push(idCarta);
}
function abrirCartaHTML (elemento) {
    elemento.querySelector(".carta-baixo").classList.add("escondido");
    elemento.querySelector(".carta-aberta").classList.remove("escondido");
}


function ePrimeiraCarta(elemento) {

    if(cartasAbertas.length % 2 === 0) {  //se for par o numero de cartas abertas, devo saber se é da match

        if(cartasAbertas[cartasAbertas.length-1] === cartasAbertas[cartasAbertas.length-2]) {
            //Esperar 1s
            finalizarJogo();
            
        }
        else {
            //Se forem diferentes...
            //esperar 1s
            
            baixarCarta(elemento);
            console.log(elemento);
            let paiPrimeiraCarta = document.querySelector(`.carta-baixo.${cartasAbertas[cartasAbertas.length-1]}.escondido`).parentNode
            console.log(paiPrimeiraCarta);
            baixarCarta(paiPrimeiraCarta);
            
            

        }

    } 

}
function abrirCarta(elemento) {
   if(elemento.querySelector(".carta-aberta").classList.contains("escondido") === true){
        abrirCartaHTML(elemento);
        
        adicionarALista(elemento);
        ePrimeiraCarta(elemento);}
    
}


function baixarCarta(cartaBaixar) {
    console.log(cartaBaixar.querySelector(".carta-baixo").classList);
    cartaBaixar.querySelector(".carta-baixo").classList.remove("escondido");
 
    cartaBaixar.querySelector(".carta-aberta").classList.add("escondido");
    let idCartaLista = cartaBaixar.querySelector(".carta-baixo").classList;
    let idCarta = idCartaLista[1];
    cartasAbertas.splice(cartasAbertas.indexOf(idCarta),1);
 }

// Interação do Jogo






function finalizarJogo () {
    if (cartasAbertas.length === cartasNoJogo.length)  {
        alert(`Parabéns, você ganhou em ${numJogadas} jogadas!`);
    }
}
function contador () {
 numJogadas ++
}


// 
