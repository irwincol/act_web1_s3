// Implementa un programa que use ciclos 
// for anidados para crear el siguiente patron

// Patrón creciente
for (let i = 1; i <= 5; i++) {
    let patronDescendente = "";
    for (let j = 1; j <= i; j++) {
        patronDescendente += "*";
    }
    console.log(patronDescendente);
}
for (let i = 4; i >= 1; i--) {
    let patronAscendente = "";
    for (let j = 1; j <= i; j++) {
        patronAscendente += "*";
    }
    console.log(patronAscendente);
}