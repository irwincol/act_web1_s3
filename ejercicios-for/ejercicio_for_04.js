// Utiliza ciclos for anidados para encontrar y mostrar 
// todos los números primos entre 1 y 100.
//  Debe indicar cuántos números primos se encontraron.

let primos = [];
let contadorPrimos = 0;

// Ciclo externo para revisar cada número del 2 al 100
for (let numero = 2; numero <= 100; numero++) {
    let esPrimo = true;
    
    // Ciclo interno para verificar si el número es primo
    // Verificamos si el número tiene divisores
    //  (aparte de 1 y él mismo)
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            esPrimo = false;
            break; 
            //Si no es primo, salimos del ciclo interno
        }
    }
    
    // Si el número es primo, lo guardamos
    if (esPrimo) {
        primos.push(numero);
        contadorPrimos++;
    }
}

// Mostrar resultados
console.log("Números primos encontrados:", primos);
console.log("Total de números primos encontrados:", contadorPrimos);