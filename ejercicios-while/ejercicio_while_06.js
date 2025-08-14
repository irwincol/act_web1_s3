// Ejercicio While 6: Búsqueda en Array

// Dado un array de nombres, 
// usa un ciclo while para buscar un nombre específico.
//  El programa debe mostrar en qué posición 
// se encontró el nombre o indicar si no existe.

// Array de nombres
let nombres = ["irwin", "albany", "said", "samira"];

// Nombre a buscar
let nombreBuscado = "samira";

// Variables para el ciclo
let i = 0;
let encontrado = false;

// Ciclo while para buscar el nombre
while (i < nombres.length && !encontrado) {
    if (nombres[i] === nombreBuscado) {
        console.log(`El nombre "${nombreBuscado}" se encontró en la posición ${i}`);
        encontrado = true;
    }
    i++;
}

// Si no se encontró
if (!encontrado) {
    console.log(`El nombre "${nombreBuscado}" no existe en el array.`);
}
