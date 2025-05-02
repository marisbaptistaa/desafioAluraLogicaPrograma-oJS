console.log('Boas vindas'); //mensagem que vai pro 'Insepecionar'

let nome = 'Mariana'; 

console.log(`Olá ${nome}`); 

alert(`Olá ${nome}`); //mensagem que vai como alerta pro usuário

prompt('Qual linguagem de programação você mais gosta?');

let linguagemFavorita = 'JavaScript';
console.log(`${linguagemFavorita}`);

let valor1 = 7;
let valor2 = 9;
let resultado = valor1 + valor2
console.log(`A soma de ${valor1} e ${valor2} é ${resultado}`);

let idade = prompt('Qual é a sua idade?'); 

if (idade > 18) {
    console.log('Maior de idade')
}
    else {
        console.log('Menor de idade')
    };

var numero = prompt('Fale um número') //var é variável


if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let numero2 = 7;

while (numero2 < 10) {
    console.log(`${numero2}`);
    numero2++;
}

var nota = 9;

if (nota > 7) {
    console.log('Aprovado');
} else if (nota <7) {
    console.log('Reprovado'); 
} 

console.log(Math.random());
