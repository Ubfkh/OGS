// =====================================================================
// SESIÓN 4 · FETCH CON FORMATOS · Ejercicios 4.1 a 4.6
// Escribe tu código debajo de cada enunciado.
// Para ejecutarlo: abre index.html con Live Server (clic derecho →
// «Open with Live Server»). Con doble clic (file://) fetch no funciona.
// Los archivos que vas a pedir están en la carpeta data/.
// =====================================================================


// ---------- Código que ya tienes hecho (no hace falta tocarlo) ----------
// pintarTabla(alumnos, titulo): devuelve una <table> con los alumnos.
// alumnos es un array de objetos { nombre, apellido, edad, curso }.
function pintarTabla(alumnos, titulo) {
  const tabla = document.createElement('table');
  const caption = document.createElement('caption');
  caption.textContent = titulo;
  tabla.append(caption);
  const cabecera = tabla.insertRow();
  for (const campo of ['Nombre', 'Apellido', 'Edad', 'Curso']) {
    const th = document.createElement('th');
    th.textContent = campo;
    cabecera.append(th);
  }
  for (const a of alumnos) {
    const fila = tabla.insertRow();
    for (const valor of [a.nombre, a.apellido, a.edad, a.curso]) {
      fila.insertCell().textContent = valor;
    }
  }
  return tabla;
}
// ------------------------------------------------------------------------


// ---------------------------------------------------------------------
// EJERCICIO 4.1 · Mira la respuesta por dentro
// Haz un fetch de 'data/contenido.json' con then y, en el primer then,
// muestra por consola:
//   - la respuesta entera
//   - respuesta.status y respuesta.ok
//   - el tipo de contenido: respuesta.headers.get('Content-Type')
// Después lee el contenido con .json() y, en un segundo then, muestra
// los datos por consola. Termina la cadena con un catch.
//
// Repite lo mismo con 'data/contenido.txt' (léelo con .text()).
// ¿Qué Content-Type tiene cada uno?
// ---------------------------------------------------------------------

// Tu código aquí:


// 1. Petición a 'data/contenido.json'
fetch('data/contenido.json')
  .then((respuesta) => {
    console.log('--- RESPUESTA JSON ---');
    console.log('Respuesta entera:', respuesta);
    console.log('Status y OK:', respuesta.status, respuesta.ok);
    console.log('Content-Type:', respuesta.headers.get('Content-Type'));

    return respuesta.json();
  })
  .then((datos) => {
    console.log('Datos JSON:', datos);
  })
  .catch((error) => {
    console.error('Error al cargar el JSON:', error);
  });

// 2. Petición a 'data/contenido.txt'
fetch('data/contenido.txt')
  .then((respuesta) => {
    console.log('--- RESPUESTA TXT ---');
    console.log('Respuesta entera:', respuesta);
    console.log('Status y OK:', respuesta.status, respuesta.ok);
    console.log('Content-Type:', respuesta.headers.get('Content-Type'));

    return respuesta.text();
  })
  .then((texto) => {
    console.log('Contenido TXT:', texto);
  })
  .catch((error) => {
    console.error('Error al cargar el TXT:', error);
  });


// ---------------------------------------------------------------------
// EJERCICIO 4.2 · Cuatro formatos
// Completa las cuatro funciones. Cada una pide su archivo de data/ y
// pinta el resultado en su caja (#json, #txt, #html y #xml).
// Los botones de la página ya las llaman.
//   - JSON: léelo con .json(). Pinta el titulo en un <h3> y el
//           mensaje en un <p>.
//   - TXT:  léelo con .text() y píntalo con textContent.
//   - HTML: léelo con .text() y píntalo con innerHTML.
//   - XML:  léelo con .text(), conviértelo con
//           new DOMParser().parseFromString(texto, 'application/xml')
//           y saca <titulo> y <mensaje> con querySelector.
//           Píntalos como en el JSON.
// Termina cada cadena con un catch que pinte el mensaje del error
// en la caja.
// ---------------------------------------------------------------------

function cargarJson() {
  // Tu código aquí
  fetch('data/contenido.json')
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTTP: ${respuesta.status}`);
      }

      return respuesta.json();
    })
    .then((datos) => {
      const caja = document.getElementById('json');
      caja.innerHTML = '';

      const titulo = document.createElement('h3');
      titulo.textContent = datos.titulo;

      const mensaje = document.createElement('p');
      mensaje.textContent = datos.mensaje;

      caja.append(titulo, mensaje);
    })
    .catch((error) => {
      document.getElementById('json').textContent = error.message;
    });
}

function cargarTxt() {
  fetch('data/contenido.txt')
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }

      return respuesta.text();
    })
    .then((texto) => {
      document.getElementById('txt').textContent = texto;
    })
    .catch((error) => {
      document.getElementById('txt').textContent = error.message;
    });
}

function cargarHtml() {
  fetch('data/contenido.html')
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }

      return respuesta.text();
    })
    .then((html) => {
      document.getElementById('html').innerHTML = html;
    })
    .catch((error) => {
      document.getElementById('html').textContent = error.message;
    });
}

function cargarXml() {
  fetch('data/contenido.xml')
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }

      return respuesta.text();
    })
    .then((texto) => {
      const parser = new DOMParser();
      const documento = parser.parseFromString(texto, 'application/xml');

      const titulo = documento.querySelector('titulo');
      const mensaje = documento.querySelector('mensaje');

      if (!titulo || !mensaje) {
        throw new Error('El XML no tiene los elementos esperados');
      }

      const caja = document.getElementById('xml');
      caja.innerHTML = '';

      const h3 = document.createElement('h3');
      h3.textContent = titulo.textContent;

      const p = document.createElement('p');
      p.textContent = mensaje.textContent;

      caja.append(h3, p);
    })
    .catch((error) => {
      document.getElementById('xml').textContent = error.message;
    });
}


// ---------------------------------------------------------------------
// EJERCICIO 4.3 · Piensa y prueba
// Responde en los comentarios. Para la c) y la d), cambia el código del
// 4.2, prueba y después déjalo como estaba.
// ---------------------------------------------------------------------

// a) Porque fetch devuelve primero una respuesta HTTP.
//    El primer then procesa esa respuesta y el segundo
//    recibe los datos después de leer el contenido.

// b) Porque XML no tiene un método específico en Fetch.
//    Se lee con response.text() y después se transforma
//    utilizando DOMParser.

// c) El error aparece al ejecutar response.json().
//    El fetch puede funcionar correctamente, pero el
//    contenido TXT no tiene formato JSON válido.

// d) Con textContent se muestra el código HTML como texto.
//    Con innerHTML el navegador interpreta las etiquetas.
//    Es peligroso utilizar innerHTML con contenido externo
//    porque puede permitir ataques XSS.



// ---------------------------------------------------------------------
// EJERCICIO 4.4 · Los errores de fetch
// a) Escribe la función pedir(url, formato). Debe DEVOLVER (return)
//    la promesa del fetch con un then que:
//    - si respuesta.ok es false, lance un error:
//        throw new Error(`Error ${respuesta.status} en ${url}`)
//    - si formato es 'json', devuelva respuesta.json();
//      si no, devuelva respuesta.text()
//    Así, quien la use recibe los datos ya leídos en un solo then:
//      pedir('data/contenido.json', 'json').then(datos => ...)
// b) Completa probarErrores: usa pedir con 'data/noexiste.json' y,
//    en el catch, pinta el mensaje del error en #errores.
// c) Quita el if de pedir y vuelve a probar. ¿Qué pasa ahora?
//    ¿Por qué fetch no falla solo con un 404?
// A partir de aquí, usa pedir en los demás ejercicios.
// ---------------------------------------------------------------------

// Tu código aquí (pedir):


function probarErrores() {
  // Tu código aquí

  function pedir(url, formato) {
    return fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status} en ${url}`);
        }

        if (formato === 'json') {
          return respuesta.json();
        }

        return respuesta.text();
      });
  }
}

// Respuesta c):

function probarErrores() {
  pedir('data/noexiste.json', 'json')
    .then((datos) => {
      document.getElementById('errores').textContent =
        JSON.stringify(datos);
    })
    .catch((error) => {
      const caja = document.getElementById('errores');
      caja.textContent = error.message;
      caja.className = 'caja error';
    });
}


// ---------------------------------------------------------------------
// EJERCICIO 4.5 · Los mismos alumnos en dos formatos
// data/alumnos.json y data/alumnos.xml tienen los mismos 4 alumnos.
// Las dos primeras funciones no pintan nada: DEVUELVEN una promesa
// que se cumple con el array de alumnos (usa pedir y un then).
// a) cargarAlumnosJson(): promesa del array de alumnos del JSON.
//    Mira cómo es el archivo: los alumnos están dentro de "clase".
// b) cargarAlumnosXml(): promesa de un array con LA MISMA FORMA
//    { nombre, apellido, edad, curso }. Recorre los <alumno> con
//    querySelectorAll. Ojo: en el XML todo es texto, así que la edad
//    hay que pasarla a número con Number().
// c) mostrarAlumnos(): pide los dos A LA VEZ con Promise.all y añade a
//    #alumnos una tabla de cada uno con pintarTabla(alumnos, titulo).
//    Muestra por consola si los dos tienen el mismo número de alumnos.
// ¿Con qué formato ha sido más fácil? ¿Por qué crees que casi todas
// las APIs usan JSON?
// ---------------------------------------------------------------------

function cargarAlumnosJson() {
  return pedir('data/alumnos.json', 'json')
    .then((datos) => {
      return datos.clase;
    });
}

function cargarAlumnosXml() {
  return pedir('data/alumnos.xml', 'text')
    .then((texto) => {
      const parser = new DOMParser();
      const documento = parser.parseFromString(
        texto,
        'application/xml'
      );

      const elementos = documento.querySelectorAll('alumno');

      const alumnos = Array.from(elementos).map((alumno) => {
        return {
          nombre: alumno.querySelector('nombre').textContent,
          apellido: alumno.querySelector('apellido').textContent,
          edad: Number(alumno.querySelector('edad').textContent),
          curso: alumno.querySelector('curso').textContent
        };
      });

      return alumnos;
    });
}

function mostrarAlumnos() {
  Promise.all([
    cargarAlumnosJson(),
    cargarAlumnosXml()
  ])
    .then(([alumnosJson, alumnosXml]) => {
      const caja = document.getElementById('alumnos');

      caja.innerHTML = '';

      caja.append(
        pintarTabla(alumnosJson, 'Alumnos desde JSON'),
        pintarTabla(alumnosXml, 'Alumnos desde XML')
      );

      console.log(
        '¿Tienen el mismo número de alumnos?',
        alumnosJson.length === alumnosXml.length
      );
    })
    .catch((error) => {
      document.getElementById('alumnos').textContent =
        error.message;
    });
}

// ¿Qué formato ha sido más fácil y por qué?



// ---------------------------------------------------------------------
// EJERCICIO 4.6 · Informe de carga (ampliación)
// Quieres comprobar qué archivos se cargan bien. Pide estos cinco A LA
// VEZ con pedir, cada uno con su formato:
//   'data/contenido.json' json      'data/contenido.txt'  text
//   'data/contenido.xml'  text      'data/noexiste.json'  json
//   'data/contenido.txt'  json   ← este fallará: ¿por qué?
// Usa el combinador que espera a TODAS aunque alguna falle (sesión 3).
// Pinta en #informe una lista <ul> con una línea por archivo:
//   ✔ data/contenido.json          (clase ok)
//   ✘ data/noexiste.json: Error 404 en data/noexiste.json   (clase error)
// ---------------------------------------------------------------------

function informe() {
  const archivos = [
    { url: 'data/contenido.json', formato: 'json' },
    { url: 'data/contenido.txt', formato: 'text' },
    { url: 'data/contenido.xml', formato: 'text' },
    { url: 'data/noexiste.json', formato: 'json' },
    { url: 'data/contenido.txt', formato: 'json' }
  ];

  const promesas = archivos.map((archivo) => {
    return pedir(archivo.url, archivo.formato);
  });

  Promise.allSettled(promesas)
    .then((resultados) => {
      const caja = document.getElementById('informe');
      caja.innerHTML = '';

      const lista = document.createElement('ul');

      resultados.forEach((resultado, indice) => {
        const li = document.createElement('li');

        if (resultado.status === 'fulfilled') {
          li.textContent = `✔ ${archivos[indice].url}`;
          li.className = 'ok';
        } else {
          li.textContent =
            `✘ ${archivos[indice].url}: ${resultado.reason.message}`;

          li.className = 'error';
        }

        lista.appendChild(li);
      });

      caja.appendChild(lista);
    });
}