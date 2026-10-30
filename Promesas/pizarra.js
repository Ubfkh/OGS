// //Promesas

// //Fabricar la promesa
// // function pedirPizza(tipo) {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {                          //la pizza tarda 2 segundos
// //             if (tipo === 'piña') {
// //                 reject (new Error('Aquí no hacemos pizza con piña'))  //ha ido mal
// //             } else {
// //                 resolve ('Pizza ' + tipo)    // ha ido bien
// //             }
// //         }, 2000);
// //     }
// // )
// // }

// // //Usar la promesa

// // pedirPizza('piña')
// // .then(pizza => console.log('Ha llegado:', pizza))
// // .catch(error => console.log('Problema:', error.message))
// // .finally(() => console.log('Fin del pedido'));


// const lanzarDado = () => new Promise((resolve, reject) => {
//     setTimeout (() => {
//         const n = Math.ceil(Math.random() * 6)   // número del 1 al 6
//         if (n === 1) reject (new Error('Has sacado un 1'))
//         else resolve(n)
//     }, 1000)
// })

// lanzarDado()
//     .then(n => console.log('Salió un', n))
//     .catch(err => console.log('Error:', err.message))
//     .finally(()=> console.log('Fin de la tirada'))

// //plantilla promesas

// function nombre(datos) {
//     return new Promise((resolve, reject) => {
//         // lógica que hace el trabajo
//         // si ha ido bien resolve(resultado)
//         // si ha ido mal reject(new Error('...'))
//     })
// }
// 7. ENCADENAR PROMESAS
// Una pizzería con tres pasos. Cada uno tarda 1 segundo y necesita
// el resultado del anterior:
//   1. pedirPizza(tipo)    → 'Pizza barbacoa'
//   2. hornearPizza(pizza) → 'Pizza barbacoa horneada'
//   3. llevarPizza(pizza)  → 'Pizza barbacoa horneada y entregada en casa'
// Cada función DEVUELVE una promesa.

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

function llevarPizza(pizza) {
  return new Promise(resolve => {
    setTimeout(() => resolve(pizza + ' y entregada en casa'), 1000);
  });
}

// Las tres reglas de encadenar:
//  1. then siempre devuelve una promesa nueva → se puede poner otro then detrás
//  2. Lo que DEVUELVES en un then lo recibe el siguiente then
//     (si devuelves una promesa, el siguiente ESPERA a que se cumpla)
//  3. Si algo falla, se saltan los then y se va directo al catch

// Los pasos van uno DEBAJO de otro (no uno dentro de otro) y con un solo catch:
pedirPizza('barbacoa')
  .then(pizza => hornearPizza(pizza))        // recibe 'Pizza barbacoa', devuelve la promesa del horno
  .then(pizza => llevarPizza(pizza))         // recibe 'Pizza barbacoa horneada', devuelve la del reparto
  .then(mensaje => console.log(mensaje))     // recibe el mensaje final
  .catch(error => console.log('Problema:', error.message));


  // ¿En qué orden sale?
console.log('A');                                  // código normal
setTimeout(() => console.log('B'), 0);             // cola de tareas
Promise.resolve().then(() => console.log('C'));    // cola de microtareas
console.log('D');                                  // código normal


// Recordando que hace setTimeout()
const avisar = () => console.log('¡Han pasado 2 segundos!');

setTimeout(avisar, 2000);   // sin paréntesis: le pasamos la función

function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}