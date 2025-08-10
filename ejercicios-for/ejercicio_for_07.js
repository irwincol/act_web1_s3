// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear
//  una matriz 5x5 donde cada elemento 
// sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.

// Crear la matriz vacía
let matriz = [];

// Crear y llenar la matriz 5x5
for (let fila = 0; fila < 5; fila++) {
    // Crear una nueva fila vacía
    matriz[fila] = [];
    
    // Llenar cada columna de la fila actual
    for (let columna = 0; columna < 5; columna++) {
        // Cada elemento es la suma de sus índices
        matriz[fila][columna] = fila + columna;
    }
}

// Función para formatear la matriz de manera bonita
function mostrarMatriz(matriz) {
    console.log("Matriz 5x5 donde cada elemento es fila + columna:");
    console.log("----------------------------------------");
    
    for (let fila = 0; fila < 5; fila++) {
        // Formateamos cada número para que ocupe 2 espacios
        let filaStr = matriz[fila]
            .map(num => num.toString().padStart(2, ' '))
            .join(' | ');
        
        console.log(filaStr);
        
        // Agregar línea separadora entre filas (excepto la última)
        if (fila < 4) {
            console.log("----------------------------------------");
        }
    }
    console.log("----------------------------------------");
}

mostrarMatriz(matriz);
