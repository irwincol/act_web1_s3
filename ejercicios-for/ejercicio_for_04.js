let primos = [];
let contadorPrimos = 0;

// Ciclo externo para revisar cada número del 2 al 100
for (let numero = 2; numero <= 100; numero++) {
    let esPrimo = true;
    
    // Ciclo interno para verificar si el número es primo
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            esPrimo = false;
            break;
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