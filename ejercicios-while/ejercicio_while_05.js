// Ejercicio While 5: Calculadora de Factorial

// Desarrolla una función que use un ciclo while para 
// calcular el factorial de un número dado. 
// Debe mostrar paso a paso cómo se va calculando el factorial.

function calcularFactorial(numero) {
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo";
    }
    
    let factorial = 1;
    let numeroActual = numero;
    
    console.log(`Calculando el factorial de ${numero}:`);
    console.log("------------------------------------------------");
    console.log(`Paso 0: factorial = ${factorial}`);
    
    while (numeroActual > 1) {
        factorial = factorial * numeroActual;
        console.log(`Paso ${numero - numeroActual + 1}: ${factorial} (${factorial/numeroActual} × ${numeroActual})`);
        numeroActual--;
    }
    
    return factorial;
}

// Probemos con diferentes números
console.log("\nEjemplo 1:");
let resultado1 = calcularFactorial(5); // 5! = 120
console.log("Resultado final:", resultado1);

console.log("\nEjemplo 2:");
let resultado2 = calcularFactorial(3); // 3! = 6
console.log("Resultado final:", resultado2);

console.log("\nEjemplo 3:");
let resultado3 = calcularFactorial(0); // 0! = 1
console.log("Resultado final:", resultado3);

console.log("\nEjemplo 4:");
let resultado4 = calcularFactorial(-1); // Número negativo
console.log("Resultado final:", resultado4);