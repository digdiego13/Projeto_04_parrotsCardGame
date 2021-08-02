// Declaração das variáveis

const listaCartasTotais = ["bobrossparrot", "bobrossparrot", "explodyparrot", "explodyparrot", "fiestaparrot","fiestaparrot", "metalparrot","metalparrot", "revertitparrot","revertitparrot", "tripletsparrot","tripletsparrot", "unicornparrot", "unicornparrot"];
let cartasNoJogo = [];
let qtdCartas;
let cartasAbertas = [];
let cartasFechadas = [];
let numJogadas = 0;
let segundos = 0;



quantidadeCartas();

function comparador() { 
	return Math.random() - 0.5; 
}

function quantidadeCartas() {
    while(qtdCartas < 4 || qtdCartas > 14 || !qtdCartas || qtdCartas%2 !== 0) {
        qtdCartas = Number(prompt("Coloque a quantidade de cartas que deseja jogar:"));      
    }
    //COLOCANDO TODAS AS CARTAS NO DOOM
    criarListaJogo()
    const cartaHTML = document.querySelector(".jogo");
    for(let i = 0 ; i < (qtdCartas) ; i++) {
        cartaHTML.innerHTML += `<li class="carta" onclick="abrirCarta(this)">
            <img src="/Arquivos_ext/front.png" class="carta-baixo ${cartasNoJogo[i]}">
            <img src="/Arquivos_ext/${cartasNoJogo[i]}.gif"/ class="carta-aberta ${cartasNoJogo[i]} escondido">
            </li>`
    }
}

//CRIANDO LISTA DE CARTAS NO JOGO
function criarListaJogo(){
    for(let i = 0 ; i < (qtdCartas) ; i++) {
        cartasNoJogo.push(listaCartasTotais[i]);
}
cartasNoJogo.sort(comparador);
cartasFechadas = cartasNoJogo;
}

 //CRIANDO LISTAS DE CARTAS ABERTAS
function adicionarALista (elemento) {
    let idCartaLista = elemento.querySelector(".carta-aberta").classList;
    let idCarta = idCartaLista[1];
    cartasAbertas.push(idCarta);
}
// VIRANDO A CARTA NO DOOM
function abrirCartaHTML (elemento) {
    elemento.querySelector(".carta-baixo").classList.add("escondido");
    elemento.querySelector(".carta-aberta").classList.remove("escondido");
}

// ABRIR A CARTA AO CLICAR
function abrirCarta(elemento) {
    if(elemento.querySelector(".carta-aberta").classList.contains("escondido") === true){
         abrirCartaHTML(elemento);
         adicionarALista(elemento);
         numJogadas ++;
         relogio();
         ePrimeiraCarta(elemento);}
     
 }
 

// COMPARANDO A DUPLA DE CARTAS QUE FOI ABERTA
function ePrimeiraCarta(elemento) {

    if(cartasAbertas.length % 2 === 0) {  //se for par o numero de cartas abertas, devo saber se é da match

        if(cartasAbertas[cartasAbertas.length-1] === cartasAbertas[cartasAbertas.length-2]) {
            //Esperar 1s
            setTimeout(finalizarJogo,1000);
            
        }
        else {
            //Se forem diferentes: Abaixar a primeira e segunda cartas
            //esperar 1s
            setTimeout(function() {baixarCarta(elemento);
                let primeiraCarta = document.querySelector(`.carta-baixo.${cartasAbertas[cartasAbertas.length-1]}.escondido`)//BUSCANDO A PRIMEIRA CARTA ABERTA
                let paiPrimeiraCarta = primeiraCarta.parentNode;
                baixarCarta(paiPrimeiraCarta);}, 1000, elemento);
            

        }

    } 

}
// ABAIXANDO A CARTA - TIRANDO DA LISTA E VIRANDO NO DOOM
function baixarCarta(cartaBaixar) {
    //MEXENDO NO DOOM
    cartaBaixar.querySelector(".carta-baixo").classList.remove("escondido");
    cartaBaixar.querySelector(".carta-aberta").classList.add("escondido");
    //TIRANDO DA LISTA DE CARTAS ABERTAS
    let idCartaLista = cartaBaixar.querySelector(".carta-baixo").classList;
    let idCarta = idCartaLista[1];
    cartasAbertas.splice(cartasAbertas.indexOf(idCarta),1);
 }

function finalizarJogo () {
    if (cartasAbertas.length === cartasNoJogo.length)  {
        alert(`Parabéns, você ganhou em ${numJogadas} jogadas e em ${segundos} segundos!`);
    }
}


function relogio () {
    if(numJogadas === 1) {
        setInterval(function () {
            
            segundos ++
            document.querySelector(".contador").innerHTML = `${segundos} Seconds`
        }, 1000);
    }
    else if (cartasAbertas.length === cartasNoJogo.length)  {clearInterval(1)}
    
}



