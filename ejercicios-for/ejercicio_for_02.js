// Implementa un programa que use ciclos 
// for anidados para crear el siguiente patron

// Patrón creciente
for (let i = 1; i <= 5; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "*";
    }
    console.log(linea);
}
for (let i = 4; i >= 1; i--) {
    let patron = "";
    for (let j = 1; j <= i; j++) {
        patron += "*";
    }
    console.log(patron);
}