// Implementa un programa que use un ciclo for 
// para verificar si una palabra o frase es un palíndromo
//  (se lee igual de izquierda a derecha que de derecha a 
// izquierda). 
// Ignora espacios y mayúsculas.

function esPalindromo(texto) {
    // Preparar el texto: convertir a minúsculas y quitar espacios
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Comparar caracteres desde ambos extremos hacia el centro
    for (let i = 0; i < texto.length / 2; i++) {
        if (texto[i] !== texto[texto.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function analizarPalindromo(texto) {
    console.log("\nAnalizando:", texto);
    console.log("------------------------");
    
    // Mostrar el texto preparado
    let textoProcesado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log("Texto procesado:", textoProcesado);
    
    // Verificar si es palíndromo
    let resultado = esPalindromo(texto);
    
    // Mostrar resultado
    console.log("¿Es palíndromo?:", resultado ? "SÍ" : "NO");
    
    if (resultado) {
        console.log("Se lee igual en ambos sentidos:");
        console.log("→", textoProcesado);
        console.log("←", textoProcesado.split('').reverse().join(''));
    }
}

// Probar con varios ejemplos
let ejemplos = [
    "Anita lava la tina",
    "A man a plan a canal Panama",
    "Hola Mundo",
    "Radar",
    "Somos o no somos",
    "¡Oso!"
];

console.log("VERIFICADOR DE PALÍNDROMOS");
console.log("==========================");

ejemplos.forEach(ejemplo => {
    analizarPalindromo(ejemplo);
});