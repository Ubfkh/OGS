// =====================================================================
// EJERCICIO 2.6 · Adiós, pirámide: el semáforo con promesas
// Abre semaforo.html en el navegador para ver el resultado.
//
// Rehaz el semáforo del ejercicio 1.4 (verde 3 s → ámbar 1 s → rojo 3 s,
// y vuelta a empezar), pero ahora con promesas:
//
// 1. Copia aquí tu función esperar(ms) del ejercicio 2.5.
// 2. Crea color(c, ms), que pinte el círculo con el color c
//    y DEVUELVA esperar(ms).
// 3. Encadena los tres colores con then, sin meter un then dentro de otro.
//
// Compara la forma del código con la de tu versión del ejercicio 1.4.
// =====================================================================

const semaforo = document.getElementById('semaforo');

// Tu código aquí:

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function color(c, ms) {
  semaforo.className = `círculo ${c}`; // Aplica la clase del color correspondiente
  return esperar(ms);
}

function iniciarSemaforo() {
  color('verde', 3000)
    .then(() => color('ámbar', 1000))
    .then(() => color('rojo', 3000))
    .then(iniciarSemaforo); // Al terminar el rojo, volvemos a iniciar el ciclo
}

iniciarSemaforo();
