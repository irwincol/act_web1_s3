// Utiliza un ciclo for para generar la 
// siguiente secuencia:
//  2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. 
// Debe mostrar cada término y la suma total de la secuencia.



let termino = 2;
let suma = 0;
let secuencia = [];

// Generar la secuencia
console.log("Generando secuencia de potencias de 2:");
console.log("-------------------------------------");

for (let i = 1; i <= 10; i++) {
    console.log(`Término ${i}: ${termino}`);
    secuencia.push(termino);
    suma += termino;
    termino *= 2;
}

// Mostrar resumen
console.log("\nResumen:");
console.log("-------------------------------------");
console.log("Secuencia completa:", secuencia.join(", "));
console.log("Suma total de la secuencia:", suma);

// Mostrar desglose de la suma
console.log("\nDesglose de la suma:");
console.log("-------------------------------------");
let desglose = secuencia.join(" + ");
console.log(`${desglose} = ${suma}`);