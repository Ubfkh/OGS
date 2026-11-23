// =====================================================
// TIENDA · Es la solución del ejercicio 3.3. NO HACE FALTA TOCARLA.
// Usa obtenerProductos() y obtenerStock(id) sin saber de dónde salen:
// antes de api.js (simulada), ahora de api-fetch.js o api-axios.js.
// =====================================================

const cargando = document.getElementById('cargando');
const error = document.getElementById('error');
const mensajeError = document.getElementById('mensajeError');
const lista = document.getElementById('listaProductos');
const btnReintentar = document.getElementById('btnReintentar');

const mostrar = elemento => elemento.classList.remove('oculto');
const ocultar = elemento => elemento.classList.add('oculto');

function pintarProducto(producto, unidades) {
  const li = document.createElement('li');
  const nombre = document.createElement('span');
  nombre.textContent = `${producto.nombre} · ${producto.precio.toFixed(2)} €`;
  const stock = document.createElement('span');
  stock.textContent = unidades > 0 ? `${unidades} uds.` : 'Agotado';
  if (unidades === 0) stock.classList.add('agotado');
  li.append(nombre, stock);
  lista.append(li);
}

function cargarTienda() {
  // 1. Preparar la pantalla: vaciar la lista (por si es un reintento),
  //    quitar un error anterior y mostrar «Cargando…»
  lista.replaceChildren();
  ocultar(error);
  mostrar(cargando);

  // Los productos llegan en el primer then, pero los necesitamos también
  // en el segundo para pintarlos. Por eso los guardamos en una variable
  // de fuera, que ven los dos then.
  let productos;

  // 2. Pedir los productos
  obtenerProductos()
    // 3. Guardarlos y pedir el stock de TODOS a la vez.
    //    map convierte cada producto en su promesa de stock, y Promise.all
    //    junta las cinco en una sola. La DEVOLVEMOS para que el siguiente
    //    then la espere.
    .then(respuesta => {
      productos = respuesta;
      const peticiones = productos.map(p => obtenerStock(p.id));
      return Promise.all(peticiones);
    })
    // 4. Pintar. Promise.all respeta el orden: stocks[i] es el stock de
    //    productos[i], así que los emparejamos por la posición i.
    .then(stocks => {
      productos.forEach((producto, i) => pintarProducto(producto, stocks[i].unidades));
    })
    // 5. Si falla cualquier petición (productos o un solo stock), se saltan
    //    los then y se llega aquí. Llamamos err al error porque «error» ya
    //    es el bloque del DOM.
    .catch(err => {
      mensajeError.textContent = 'Error: ' + err.message;
      mostrar(error);
    })
    // 6. Pase lo que pase, quitar «Cargando…»
    .finally(() => ocultar(cargando));
}

// 7. Reintentar = volver a cargar. Se pasa la función, sin paréntesis.
btnReintentar.addEventListener('click', cargarTienda);

cargarTienda();


