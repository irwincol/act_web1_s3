// Ejercicio While 10: Procesador de Calificaciones

// Desarrolla un programa que use un ciclo while para 
// procesar calificaciones de estudiantes. Debe continuar
//  pidiendo calificaciones hasta que se ingrese -1, 
// luego calcular y mostrar el promedio, la calificación más alta y más baja.

// Lista de calificaciones
let calificaciones = [4.5, 3.8, 5.0, 2.9, 4.2]; 

let suma = 0;
let cantidad = 0;
let max = calificaciones[0]; // Tomamos el primer valor como referencia
let min = calificaciones[0];
let i = 0;

while (i < calificaciones.length) {
    let calificacion = calificaciones[i];
    suma += calificacion;
    cantidad++;

    if (calificacion > max) {
        max = calificacion;
    }
    if (calificacion < min) {
        min = calificacion;
    }

    i++;
}

let promedio = suma / cantidad;

console.log("Promedio:", promedio.toFixed(2));
console.log("Máxima:", max);
console.log("Mínima:", min);
