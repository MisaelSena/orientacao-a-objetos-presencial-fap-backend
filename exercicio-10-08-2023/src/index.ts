import { Calculadora } from "./Calculadora";
const prompt = require('prompt-sync')();

function calc() {
        
    let numero1 = parseFloat(prompt("Número 1: "));

    if(isNaN(numero1)){
        console.log("O valor digitado não é um número!");
        calc();
    }

    let numero2 = parseFloat(prompt("Número 2: "));

    if (isNaN(numero2)) {
        console.log("O valor digitado não é um número!");
        calc();
    }
    
    let operacao = prompt("Informe a operação(+,-,* ou /): ");

    const calculadora = new Calculadora(numero1,numero2);

    switch (operacao) {
        case "+":
            console.log(`O resultado da Soma foi: ${calculadora.soma()}`);
            break;
        case "-":
            console.log(`O resultado da Subtração foi: ${calculadora.subtracao()}`);
            break;
        case "*":
            console.log(`O resultado da Multiplicação foi: ${calculadora.multiplicacao()}`);
            break;
        case "/":
            console.log(`O resultado da Divisão foi: ${calculadora.divisao()}`);
            break;
        default:
            console.log("Operação informada inválida!");
            calc();
            break;
    }  
        
}

calc();





