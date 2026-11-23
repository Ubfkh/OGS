// =====================================================================
// SESIÓN 1 · CALLBACKS · Ejercicios 1.1, 1.2 y 1.3
// Escribe tu código debajo de cada enunciado.
// Para ejecutarlo: node ejercicios.js
// (El ejercicio 1.4 está en semaforo.js)
// =====================================================================


// ---------------------------------------------------------------------
// EJERCICIO 1.1 · De función clásica a flecha
// Reescribe cada función como función flecha, en la forma más corta
// posible. Cambia los nombres para que no se repitan (cuadrado2, etc.)
// y comprueba con console.log que dan el mismo resultado.
// ---------------------------------------------------------------------

// Tu código aquí:

const cuadrado = x => x * x;
const saludo = (nombre, hora) => `Hola ${hora}, ${nombre}`;
const crearPunto = (x,y) => ({x: x, y: y});
const aleatorio = () => Math.random();


// ---------------------------------------------------------------------
// EJERCICIO 1.2 · Mi propio forEach y mi propio filter
// Vas a escribir tus propias versiones de forEach y filter.
// Recuerda la función repetir que hemos visto en clase:
//
//   const repetir = (veces, fn) => {
//     for (let i = 0; i < veces; i++) {
//       fn(i);
//     }
//   };
//
// Usaremos estos dos arrays:
const frutas = ['manzana', 'pera', 'uva'];
const numeros = [3, 8, 1, 12];

// ----- a) miForEach(array, callback) -----
// Debe hacer lo mismo que frutas.forEach(...): recorrer el array y,
// en cada vuelta, llamar al callback pasándole el elemento y su posición.
//
//   Paso 1. Dentro, escribe un for que recorra el array
//           (i desde 0 hasta array.length - 1).
//   Paso 2. En cada vuelta, llama al callback con DOS argumentos:
//           el elemento (array[i]) y su posición (i).
//
// Pista: es como repetir, pero con array.length en lugar de veces,
// y callback(array[i], i) en lugar de fn(i).
// No hace falta return: el callback ya hace el trabajo (imprimir).

const miForEach = (array, callback) => {
  // Tu código aquí
  for (let i=0; i < array.length; i++){
    callback(array[i], i);
  }
};

// Prueba (quita las // de la línea de abajo cuando tengas la función):
miForEach(frutas, (fruta, i) => console.log(i + ': ' + fruta));
//
// Salida esperada:
//   0: manzana
//   1: pera
//   2: uva


// ----- b) miFilter(array, condicion) -----
// Debe hacer lo mismo que numeros.filter(...): DEVOLVER un array nuevo
// solo con los elementos que cumplen la condición.
// condicion es un callback que recibe un elemento y DEVUELVE true o false.
//
//   Paso 1. Crea un array vacío: const resultado = [];
//   Paso 2. Recorre el array (con un for o con tu miForEach).
//   Paso 3. Para cada elemento, llama a condicion(elemento).
//           Si devuelve true, añádelo con resultado.push(elemento).
//   Paso 4. Al final, devuelve resultado con return.
//
// Aquí SÍ hace falta return: quien llama a miFilter quiere el array.

const miFilter = (array, condicion) => {
  // Tu código aquí
  let resultado = [];

  for (let i=0; i < array.length; i++){
    if (condicion(array[i]))
      resultado.push(array[i]);
  }

  return resultado;
};

// Pruebas (quita las // cuando tengas la función):
 console.log(miFilter(numeros, n => n > 5));         // [ 8, 12 ]
 console.log(miFilter(frutas, f => f.length > 4));   // [ 'manzana' ]



// ---------------------------------------------------------------------
// EJERCICIO 1.3 · Predice el orden
// ANTES de ejecutar, escribe en el comentario de abajo en qué orden
// crees que saldrán los números. Luego quita el /* y el */ y ejecuta.
// Explica con tus palabras por qué forEach no espera y
// setTimeout(..., 0) sí.
// ---------------------------------------------------------------------

// Mi predicción: 1 4 3 5 6 2
// Mi explicación: Primero va el 1, porque está primero, luego el 2 y el 3 van a la pila, pero el 4 se adelanta al 3, porque no se va a la pila. Luego van el 5 y el 6, y por último el 2, que es el que más espera
//El 3 se ha atrasado mucho, me cae mal JavaScript

console.log('1');
setTimeout(() => console.log('2'), 100);
setTimeout(() => console.log('3'), 0);
console.log('4');
[5, 6].forEach(n => console.log(n));

