alert('Boas vindas ao jogo do número secreto');
// 1. Problema inicial: Acoplamento excessivo
//   - O código original tinha o número secreto "fixo" em várias partes.
//   - Isso significa que, para mudar o número secreto, era necessário alterar manualmente em vários lugares.
//   - Isso é chamado de acoplamento, e dificulta a manutenção do código.

// 2. Solução: Template Strings (Interpolação de Strings)
//   - Template Strings permitem combinar texto com variáveis de forma dinâmica.
//   - Sintaxe: `` ` ` ` (crases) em vez de aspas simples ou duplas.
//   - Para inserir o valor de uma variável, use ${nomeDaVariavel}.
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// 3. Vantagens das Template Strings
//   - Código mais legível e fácil de entender.
//   - Facilidade na manutenção: basta alterar o valor da variável em um único lugar.
//   - Evita erros ao ter que alterar o mesmo valor em várias partes do código.

// 4. Aplicando no código do jogo:
//   - A mensagem de acerto agora usa Template String para exibir o número secreto correto.
//   - Isso garante que a mensagem sempre estará sincronizada com o valor atual do número secreto.

// Código da condição if com Template String:
if (chute == numeroSecreto) {
    console.log(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}