alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log('Número secreto');
let chute;
let tentaivas = 1

// enquanto chute não for igual ao n.s .
while(chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    /* Não é igual : !=
       Igual: ==
       Maior: > */
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}
