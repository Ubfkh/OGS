// =====================================================================
// SESIÓN 2 · PROMESAS · Ejercicios 2.1, 2.2, 2.3, 2.4, 2.5 y 2.7
// Escribe tu código debajo de cada enunciado.
// Para ejecutarlo: node ejercicios.js
// (El ejercicio 2.6 está en semaforo.js)
//
// OJO: estos ejercicios tardan en terminar, así que sus mensajes se
// pueden mezclar en la consola. Cuando acabes uno, coméntalo
// (selecciónalo y pulsa Ctrl + /) antes de pasar al siguiente.
// =====================================================================


// ---------- Código que ya tienes hecho (no hace falta tocarlo) ----------

// Para el ejercicio 2.1
function hervirAgua(litros) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (litros > 0) resolve('Agua hirviendo: ' + litros + ' litros');
      else reject(new Error('No hay agua en la olla'));
    }, 3000);
  });
}

// Para el ejercicio 2.4
function pedirPizza(tipo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tipo === 'piña') reject(new Error('No hacemos pizza con piña'));
      else resolve('Pizza ' + tipo);
    }, 1000);
  });
}

function hornearPizza(pizza) {
  return new Promise(resolve => {
    setTimeout(() => resolve(pizza + ' horneada'), 1000);
  });
}
// ------------------------------------------------------------------------


// ---------------------------------------------------------------------
// EJERCICIO 2.1 · Usar una promesa ya hecha
// La función hervirAgua (arriba) ya está hecha y devuelve una promesa.
// Úsala con then, catch y finally:
//   - con 2 litros debe salir el mensaje de éxito
//   - con 0 litros debe salir el error
//   - en los dos casos, al final debe salir «Fuego apagado»
// ---------------------------------------------------------------------

// Tu código aquí:

hervirAgua(2)
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error.message))
  .finally(() => console.log('Fuego apagado'));


hervirAgua(0)
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error.message))
  .finally(() => console.log('Fuego apagado'));

// ---------------------------------------------------------------------
// EJERCICIO 2.2 · Mi primera promesa: lanzar una moneda
// Crea lanzarMoneda(), que devuelva una promesa que tarde 500 ms y:
//   - se cumpla (resolve) con 'cara', o
//   - se rechace (reject) con new Error('cruz'),
// cada caso con un 50 % de probabilidad (pista: Math.random() < 0.5).
// Consúmela con then, catch y finally, mostrando el resultado en la
// consola. Ejecútalo varias veces.
// Pista: copia la plantilla de pedirPizza y cambia lo de dentro.
// ---------------------------------------------------------------------

// Tu código aquí:

function lanzarMoneda() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('cara');
      } else {
        reject(new Error('cruz'));
      }
    }, 500);
  });
}

// ---------------------------------------------------------------------
// EJERCICIO 2.3 · Comprobar la edad
// Crea comprobarEdad(edad), que devuelva una promesa que tarde 1 segundo:
//   - si la edad es 18 o más, se cumple con 'Puede entrar'
//   - si no, se rechaza con new Error('Es menor de edad')
// Pruébala con 20 y con 15.
// ---------------------------------------------------------------------

// Tu código aquí:

function comprobarEdad (edad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(edad >= 18){
        resolve('Ya puedes pasar');
      } else {
        reject(new Error('Trae la autoricación de tus padres para pasar'));
      }
    }, 1000);
  });
}

// ---------------------------------------------------------------------
// EJERCICIO 2.4 · Encuentra el fallo
// Este código debería mostrar 'Pizza margarita horneada', pero muestra
// undefined. Quita el /* y el */, ejecútalo, explica por qué pasa
// y corrígelo.
// ---------------------------------------------------------------------

// Por qué falla:


pedirPizza('margarita')
  .then(pizza => {
    return hornearPizza(pizza);
  })
  .then(pizza => console.log(pizza));




// ---------------------------------------------------------------------
// EJERCICIO 2.5 · esperar(ms) y cuenta atrás
// Escribe esperar(ms), que devuelva una promesa que se cumpla pasados
// ms milisegundos. Úsala para mostrar 3, 2, 1 y ¡Ya!, con un segundo
// entre cada uno, ENCADENANDO then (un then debajo de otro, sin meter
// uno dentro de otro).
// ---------------------------------------------------------------------

// Tu código aquí:

function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

esperar(1000)
  .then(() => {
    console.log('3');
    return esperar(1000);
  })
  .then(() => {
    console.log('2');
    return esperar(1000);
  })
  .then(() => {
    console.log('1');
    return esperar(1000);
  })
  .then(() => {
    console.log('¡YA!');
  });

// ---------------------------------------------------------------------
// EJERCICIO 2.7 · Predice el orden (reto)
// ANTES de ejecutar, escribe tu predicción. Luego quita /* y */.
// ---------------------------------------------------------------------

// Mi predicción: La predicción es A D B C


console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve('C').then(v => console.log(v));
console.log('D');

