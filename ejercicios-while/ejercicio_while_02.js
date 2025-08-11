// Utiliza un ciclo while para calcular
//  la suma de todos los números pares entre 1 y 50. 
// Muestra el resultado final y cuántos números
//  pares se sumaron
let numero = 1;
let sumaPares = 0;
let contadorPares = 0;

while (numero <= 50) {
    if (numero % 2 === 0) {
        sumaPares += numero;
        contadorPares++;
    }
    numero++;
}               

console.log("La suma de los números pares entre 1 y 50 es: " + sumaPares);
console.log("Se sumaron un total de " + contadorPares + " números pares.");
