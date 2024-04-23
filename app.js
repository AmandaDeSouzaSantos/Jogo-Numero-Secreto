let listaNumSort = [];
let numMaxTenta = 10;
let numMinTenta = 1;
let numAleatorio = geradorNumero();
let tentativas = 1;



function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate : 1.2});
}

function geradorNumero(){
   let numEscolhido = parseInt (Math.random () * numMaxTenta + numMinTenta);
   let quantEleList = listaNumSort.length;
   if(quantEleList == numMaxTenta){
    listaNumSort = [];
   }
   if(listaNumSort.includes(numEscolhido)){
    return geradorNumero();
   }else{
    listaNumSort.push(numEscolhido);
    console.log(listaNumSort);
    return numEscolhido;
   }
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um Número Entre ${numMinTenta} e ${numMaxTenta}`);
}
exibirMensagemInicial();



function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numAleatorio){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('h1','Acertou!!');
        exibirTextoNaTela('p', `Você Acertou o Número Secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        tentativas ++;
        if (numAleatorio > chute) {
            exibirTextoNaTela('p', 'Número Secreto Maior Que Chute!');
        }else{
            exibirTextoNaTela('p', 'Número Secreto Menor Que Chute!');
        }
        exibirTextoNaTela('h1', 'Errou!!');
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

 function criarNovoJogo(){
    numAleatorio = geradorNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
 }   
