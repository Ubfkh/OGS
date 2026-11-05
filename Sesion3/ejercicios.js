// =====================================================================
// SESIÓN 3 · COMBINAR PROMESAS · Ejercicios 3.1, 3.2 y 3.4
// Escribe tu código debajo de cada enunciado.
// Para ejecutarlo: node ejercicios.js
// (El ejercicio 3.3, la tienda, está en la carpeta tienda/)
//
// OJO: cuando acabes un ejercicio, coméntalo (Ctrl + /) antes de pasar
// al siguiente, para que los mensajes no se mezclen.
// =====================================================================


// ---------- Código que ya tienes hecho (no hace falta tocarlo) ----------
// esperar(ms): promesa que se cumple pasados ms milisegundos
const esperar = ms => new Promise(resolve => setTimeout(resolve, ms));

// tarea(nombre, ms, falla): promesa que tarda ms milisegundos.
// Si falla es true, se rechaza; si no, se cumple con el nombre.
const tarea = (nombre, ms, falla = false) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (falla) reject(new Error(nombre + ' ha fallado'));
    else resolve(nombre);
  }, ms);
});
// ------------------------------------------------------------------------


// ---------------------------------------------------------------------
// EJERCICIO 3.1 · ¿En serie o en paralelo?
// Lanza tres tareas de 1000 ms:
//   a) primero encadenadas con then (una detrás de otra)
//   b) después todas a la vez con Promise.all
// Mide el tiempo de cada versión con console.time('nombre') al empezar
// y console.timeEnd('nombre') al terminar.
// ¿Cuánto tarda cada una y por qué?
// ---------------------------------------------------------------------

// Tu código aquí:

tarea('tarea1', 1000)
  .then(() => {
    return tarea('tarea2', 1000); 
  })
  .then(() => {
    return tarea('tarea3', 1000);
  });

Promise.all([tarea('tarea4', 1000), tarea('tarea5', 1000), tarea('tarea6'), 1000]);

// Cuánto tarda cada una y por qué:

//La primera tarda 3 segundos, porque las tareas se realizan una después de otra, la segunda realiza las tres a la vez


// ---------------------------------------------------------------------
// EJERCICIO 3.2 · Elige el combinador
// Para cada situación, escribe qué método usarías
// (Promise.all, Promise.allSettled, Promise.race o Promise.any) y por qué.
// No hace falta programar nada: responde en los comentarios.
// ---------------------------------------------------------------------

// a) Necesito el usuario, sus pedidos y su carrito para pintar la página.
//    Método: Promise.all       Por qué: porque necesito los tres, si uno falla no puedo pintar la página
//
// b) Quiero cancelar si el servidor tarda más de 3 segundos.
//    Método: Promise.race         Por qué: Porque hago lo que llegue antes, los resultados del servidor o los 3 segundos
//
// c) Envío 5 correos y quiero saber cuáles han fallado.
//    Método: Promise.allSettled           Por qué: Porque, a diferencia de Promise.all, no falla todo el bloque, devuelve los fallos y los éxitos
//
// d) Tengo tres servidores con los mismos datos y me vale el primero
//    que responda bien.
//    Método:  Promise.any          Por qué: Solo coge los datos de la primera promesa que se resuelve con éxito



// ---------------------------------------------------------------------
// EJERCICIO 3.4 · Timeout (ampliación, para quien termine la tienda)
// Escribe conTimeout(promesa, ms), que devuelva una promesa que se
// rechace con new Error('Tiempo agotado') si promesa no termina en ms
// milisegundos. Pista: combina Promise.race con esperar.
// Pruébala con:
//   conTimeout(tarea('Rápida', 500), 1000)  → debe cumplirse con 'Rápida'
//   conTimeout(tarea('Lenta', 2000), 1000)  → debe fallar: Tiempo agotado
//
// Después, úsala en la tienda (lo explica el final de tienda.js).
// ---------------------------------------------------------------------

// Tu código aquí:

const espera = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function conTimeout (promesa, ms) {
  const promesaTimeout = espera(ms).then(() => {
    throw new Error('Tiempo agotado');
  });

  return Promise.race([promesa, promesaTimeout]);
}

conTimeout(tarea('Rápida', 500), 1000);
conTimeout(tarea('Lenta', 2000), 1000);