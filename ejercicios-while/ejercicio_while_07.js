// Ejercicio While 7: Contador de Dígitos

// Implementa un programa que use un ciclo while 
// para contar cuántos dígitos tiene un número entero positivo. 
// Por ejemplo, 12345 tiene 5 dígitos.

let numero = 123845;
let contador = 0;

let original = numero;

// Ciclo while para contar los dígitos
while (numero > 0) {
    numero = Math.floor(numero / 10); // Eliminar el último dígito
    contador++; // Sumar al contador
}

// Mostrar el resultado en consola
console.log(`El número ${original} tiene ${contador} dígitos.`);
