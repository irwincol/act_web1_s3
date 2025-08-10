// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para 
// invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.

// Definimos la cadena original
let cadenaOriginal = "Hola Mundo!";
let cadenaInvertida = "";

// Ciclo for para invertir la cadena
// Empezamos desde el último carácter (length - 1) hasta el primero (0)
for (let i = cadenaOriginal.length - 1; i >= 0; i--) {
    cadenaInvertida += cadenaOriginal[i];
}

// Mostramos los resultados
console.log("Cadena original:", cadenaOriginal);
console.log("Cadena invertida:", cadenaInvertida);

// Probemos con otras cadenas
let ejemplos = ["JavaScript", "¡Programación!", "2024"];

for (let texto of ejemplos) {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    console.log("\nOriginal:", texto);
    console.log("Invertida:", invertida);
}