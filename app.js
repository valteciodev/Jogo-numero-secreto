// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

var numerosGerados = [];
let limiteNumerosGerados = 10;
let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function exibirMensagemINicial (){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
};

exibirMensagemINicial();

function gerarNumeroAleatorio() {
    numero = parseInt(Math.random() * limiteNumerosGerados + 1);
    let qtdNumerosNaLista = numerosGerados.length;

    if (qtdNumerosNaLista == limiteNumerosGerados){
        numerosGerados = [];
    };
    
    if (numerosGerados.includes(numero)){
        return gerarNumeroAleatorio();
    } else {
        numerosGerados.push(numero);
        console.log(numerosGerados);
        return numero;
    };
};

function verificarChute(){
    let chute = document.querySelector("input").value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentantivas' : 'tentativa';
        let mensagemAcerto = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'Você errou! O numéro secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'Você errou! O numéro secreto é maior.');
        }
        tentativas ++;
        limparCampo();
    };
};

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = '';
};

function novoJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    exibirMensagemINicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);

};
