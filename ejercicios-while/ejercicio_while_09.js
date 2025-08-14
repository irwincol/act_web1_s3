// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego que use un ciclo while donde el usuario debe adivinar un número entre 1 y 50.
// Proporciona pistas ("muy alto", "muy bajo", "cerca") y limita a 7 intentos máximo.

let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let maxIntentos = 7;
let adivinado = false;

while (intentos < maxIntentos && !adivinado) {
    let numero = parseInt(prompt("Adivina un número entre 1 y 50:"));
    intentos++;

    if (numero === numeroSecreto) {
        alert("¡Correcto! El número era " + numeroSecreto);
        adivinado = true;
    } else if (numero < numeroSecreto) {
        alert("Muy bajo");
    } else {
        alert("Muy alto");
    }
}

if (!adivinado) {
    alert("Te quedaste sin intentos. El número era " + numeroSecreto);
}

