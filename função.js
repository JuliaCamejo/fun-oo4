const prompt = require ("prompt-sync")();

function Soma (a, b)
{
let   Soma = Number (a + b);
return Soma
}

let  a  = Number(prompt("Insira o primeiro valor:"));
let  b  = Number(prompt("Insira o segundo valor:"));

console.log ("O valor da Soma é:", a + b);

function Subtração (a, b)
{
let Subtração =  Number ( a - b); 
return Subtração
}

console.log(" O valor da Subtração é:", a - b);

function Multiplicação (a, b)
{    
    let Multiplicação = Number( a * b);
    return Multiplicação
}

console.log("O valor da Multiplicação é:", a * b)

function Divisão ( a , b)
{
let Divisão = Number ( a / b);
return Divisão 
}
console.log("O valor da Divisão é:", a / b)
