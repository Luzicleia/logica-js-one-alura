alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
//uso de aspas remete a texto
console.log('Número secreto');
let chute = prompt('Escolha um número entre 1 e 10');

//
if (chute == numeroSecreto) {
    console.log(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}