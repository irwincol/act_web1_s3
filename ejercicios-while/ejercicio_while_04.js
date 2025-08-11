
// Crea un programa que use un ciclo while para generar números 
// aleatorios entre 1 y 100 hasta que salga un número mayor a 95. Muestra 
// cada número generado y al final indica cuántos números se generaron.

let numeroGenerado = 0;
let cantidadGenerados = 0;


while (numeroGenerado <= 95) {
    // Generar número aleatorio entre 1 y 100
    numeroGenerado = Math.floor(Math.random() * 100) + 1;
    cantidadGenerados++;
    
    console.log(`Intento ${cantidadGenerados}: ${numeroGenerado}`);
}

console.log(`Se generaron ${cantidadGenerados} números`);
console.log(`El número que superó 95 fue: ${numeroGenerado}`);