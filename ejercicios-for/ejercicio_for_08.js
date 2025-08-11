// Desarrolla un programa que use un ciclo for
// para contar cuántas vocales (a, e, i, o, u)
//  hay en una frase dada.
//  Debe mostrar el conteo de cada vocal por separado.

function contarVocales(frase) {
    // Convertir a minúsculas para facilitar el conteo
    frase = frase.toLowerCase();
    
    // Objeto para almacenar el conteo de cada vocal
    let conteo = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };
    
    // Contar cada vocal
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i];
        if (conteo.hasOwnProperty(letra)) {
            conteo[letra]++;
        }
    }
    
    // Mostrar resultados
    console.log("Conteo de vocales en la frase:", frase);
    console.log("----------------------------------");
    for (let vocal in conteo) {
        console.log(`Vocal '${vocal}': ${conteo[vocal]} veces`);
    }
    
    // Mostrar total
    let total = Object.values(conteo).reduce((sum, count) => sum + count, 0);
    console.log("----------------------------------");
    console.log("Total de vocales:", total);
    
    return conteo;
}
