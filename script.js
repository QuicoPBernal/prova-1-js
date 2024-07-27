// Considere três notas (n1, n2, n3) e seus respectivos pesos (p1, p2, p3). Calcule a média ponderada das notas e atribua o resultado à variável "media". 
// Após o cálculo, exiba a média ponderada no console. OBS: Para calcular a média ponderada multiplica os valores das notas pelos valores dos pesos, 
// e divide pelas somas de todos os pesos. Lembre-se de declarar valores para os pesos e para as notas.

let n1 = Number(prompt("Digite a primeira nota: "));
let n2 = Number(prompt("Digite a segunda nota: "));
let n3 = Number(prompt("Digite a terceira nota: "));
let p1 = 5;
let p2 = 5;
let p3 = 7;

let media = (n1*p1 + n2*p2 + n3*p3) / (p1 + p2 + p3);
console.log(media);
