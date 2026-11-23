// =====================================================================
// EJERCICIO 1.4 · Semáforo con callbacks
// Abre semaforo.html en el navegador para ver el resultado.
//
// 1. Crea cambiarColor(color, ms, callback), que:
//      - pinte el fondo del círculo con ese color
//        (semaforo.style.background = color)
//      - y llame a callback pasados ms milisegundos (usa setTimeout)
//
// 2. Úsala para que el semáforo pase de:
//      verde ('green') 3 s  →  ámbar ('orange') 1 s  →  rojo ('red') 3 s
//    y vuelva a empezar.
//
// 3. Fíjate en la forma que toma tu código.
//    ¿Cómo quedaría con diez colores?
// =====================================================================

const semaforo = document.getElementById('semaforo');

// Tu código aquí:
while (true){
    semaforo.style.color = 'red';
    setTimeout(() => {
        semaforo.style.color = 'yellow';
        setTimeout(() => {
            semaforo.style.color = 'green';
        }, 1000);
    }, 1000);
}

