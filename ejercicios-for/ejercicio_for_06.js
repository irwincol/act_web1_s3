// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for 
// para calcular la potencia de un número sin
//  usar Math.pow(). 
// Debe mostrar el proceso paso a paso.

function calcularPotencia(base, exponente) {
    let resultado = 1;
    console.log(`Calculando ${base}^${exponente}:`);
    console.log(`Paso 0: resultado = ${resultado}`);

    for (let i = 1; i <= exponente; i++) {
        resultado = resultado * base;
        console.log(`Paso ${i}: ${resultado} (${base} × ${resultado/base})`);
    }

    return resultado;
}

// Ejemplos de uso
console.log("\nEjemplo 1:");
let resultado1 = calcularPotencia(2, 4); // 2^4 = 16
console.log("Resultado final:", resultado1);

console.log("\nEjemplo 2:");
let resultado2 = calcularPotencia(3, 3); // 3^3 = 27
console.log("Resultado final:", resultado2);

console.log("\nEjemplo 3:");
let resultado3 = calcularPotencia(5, 2); // 5^2 = 25
console.log("Resultado final:", resultado3);

// Caso especial: cualquier número elevado a 0
console.log("\nCaso especial:");
let resultado4 = calcularPotencia(7, 0); // 7^0 = 1
console.log("Resultado final:", resultado4);