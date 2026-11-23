// =====================================================================
// SESIÓN 5 · FETCH Y AXIOS · Ejercicios 5.1 a 5.4
// (El ejercicio 5.5, la tienda con datos reales, está en tienda/)
// Para ejecutarlo: abre index.html con Live Server.
// axios ya está cargado en index.html: puedes usar axios.get, axios.post...
// =====================================================================


// ---------- Código que ya tienes hecho (no hace falta tocarlo) ----------
// leerFormulario(): devuelve { nombre, apellido, curso } con lo escrito.
function leerFormulario() {
  return {
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    curso: document.getElementById('curso').value
  };
}

// mostrarCreado(creado, con): pinta en #post lo que devuelve el servidor.
function mostrarCreado(creado, con) {
  document.getElementById('post').textContent =
    `[${con}] Creado con id ${creado.id}: ${creado.nombre} ${creado.apellido} (${creado.curso})`;
}

const URL_API = 'https://jsonplaceholder.typicode.com/posts';
// ------------------------------------------------------------------------


// ---------------------------------------------------------------------
// EJERCICIO 5.1 · De fetch a axios
// Reescribe con axios dos funciones de la sesión 4:
//   a) cargarJson: pide 'data/contenido.json' y pinta el titulo en un
//      <h3> y el mensaje en un <p> dentro de #json.
//      Los datos están en respuesta.data, ya convertidos.
//   b) cargarXml: pide 'data/contenido.xml' y pinta lo mismo en #xml.
//      axios intenta convertir todo a JSON: para recibir el XML como
//      texto, pásale la opción { responseType: 'text' }.
// Termina cada cadena con un catch, como en la sesión 4.
// Compara con tu sesión 4: ¿qué pasos te has ahorrado?
// ---------------------------------------------------------------------

function cargarJson() {
  // Tu código aquí
}

function cargarXml() {
  // Tu código aquí
}

// Pasos que me ahorro con axios:



// ---------------------------------------------------------------------
// EJERCICIO 5.2 · Errores con axios
// Completa probarErrores: pide 'data/noexiste.json' con axios y, en el
// catch, pinta en #errores:
//   - err.message
//   - el código de estado, que está en err.response.status
// Después responde:
//   a) En la sesión 4 hacía falta if (!respuesta.ok) throw ... ¿Y aquí?
//   b) Si no hay conexión, err.response es undefined. ¿Por qué?
//      (Pista: ¿hay respuesta del servidor?)
// ---------------------------------------------------------------------

function probarErrores() {
  // Tu código aquí
}

// a)
// b)



// ---------------------------------------------------------------------
// EJERCICIO 5.3 · Enviar un alumno: fetch contra axios
// Escribe dos funciones que envíen un alumno a URL_API con POST y
// DEVUELVAN una promesa que se cumpla con el objeto que contesta el
// servidor (trae un id nuevo). Como pedir en la sesión 4: return y then.
//   a) enviarConFetch(alumno): recuerda method, la cabecera
//      Content-Type y JSON.stringify. Comprueba respuesta.ok.
//   b) enviarConAxios(alumno): con axios.post.
// Después completa los dos botones: leen el formulario, envían y, en
// el then, pintan el resultado con mostrarCreado(creado, 'fetch' o 'axios').
// Si algo falla, pinta el mensaje del error en #post.
// ¿Qué status devuelve el servidor? ¿Qué significa?
// ---------------------------------------------------------------------

function enviarConFetch(alumno) {
  // Tu código aquí
}

function enviarConAxios(alumno) {
  // Tu código aquí
}

function botonFetch() {
  // Tu código aquí
}

function botonAxios() {
  // Tu código aquí
}

// Status que devuelve y qué significa:



// ---------------------------------------------------------------------
// EJERCICIO 5.4 · Tabla comparativa
// Rellena la tabla con lo que has visto en la sesión 4 y en esta.
// ---------------------------------------------------------------------

//                              | fetch                | axios
// -----------------------------|----------------------|----------------------
// ¿Hay que instalarlo?         |                      |
// ¿Cuántos pasos para el JSON? |                      |
// ¿Dónde están los datos?      |                      |
// ¿Un 404 va al catch?         |                      |
// ¿Cómo leo un TXT o un XML?   |                      |
// ¿Cómo envío un objeto?       |                      |
// ¿Cómo pongo un tiempo máximo?|                      |
//
// Si tuvieras que elegir uno para un proyecto, ¿cuál y por qué?
