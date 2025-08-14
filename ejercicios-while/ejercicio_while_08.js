// Ejercicio While 8: Secuencia de Fibonacci

// Utiliza un ciclo while para generar los
//  primeros 15 números de la secuencia de Fibonacci. 
// Muestra cada número de la secuencia.
let a = 0, b = 1;
let contador = 0;

console.log("Secuencia de Fibonacci - Primeros 15 números:");

while (contador < 15) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    contador++;
}