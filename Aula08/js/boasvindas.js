console.log("Olá mundo!!!"); //console.log é um comando que vai exibir informações no console do navegador.

var variavel1 = 2; //var tem o tipo de escopo global, ou seja, vai ser visto de acordo por documento inteiro.
let variavel2 = 'Olá'; //let tem o tipo de escopo local. Ou seja, ela vai ser visto só dentro de uma função.
const variavel3 = 3 + 3; //const é de escopo global e não pode ser reescrito

console.log("A variável variavel1 é igual a ", variavel1);
variavel1 = 4;
console.log("Agora a variável variavel1 é igual a ", variavel1);
console.log("O valor de variável2 é igual a ", variavel2);
variavel2 = 5;
console.log("Agora o valor de variável2 é igual a ", variavel2);
console.log("O valro de variável3 é ", variavel3);