// Ejercicio While 3: 
// Validador de Contraseña

// Implementa un sistema que use un ciclo 
// while para solicitar una contraseña al
//  usuario hasta que ingrese "admin123". 
//  Debe mostrar cuántos intentos fallidos
//   hubo antes del acceso correcto

let contraseñaCorrecta = "admin123";
let contraseñaIngresada = "123456"; 
let intentosFallidos = 0;

while (contraseñaIngresada !== contraseñaCorrecta) {
    console.log("Credenciales incorrectas");
    intentosFallidos++;
    // En un caso real, aquí pediríamos la contraseña nuevamente
    break; // Agregamos break para evitar un ciclo infinito en esta simulación
}

if (contraseñaIngresada === contraseñaCorrecta) {
    console.log("Credenciales correctas");
} 

console.log("Total de intentos fallidos:", intentosFallidos);
