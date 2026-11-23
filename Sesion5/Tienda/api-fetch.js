// =====================================================
// EJERCICIO 5.5 · LA TIENDA CON DATOS REALES
// En la sesión 3 la API era simulada (api.js con setTimeout).
// Ahora los datos están en archivos de verdad que sirve Live Server:
//   data/productos.json   → [{ id, nombre, precio }, ...]
//   data/stock/1.json     → { id: 1, unidades: 12 }   (uno por producto)
//
// tienda.js es tu tienda de la 3.3 y NO SE TOCA. Solo cambia la API.
// Tienes que escribir las MISMAS dos funciones que usaba:
//   obtenerProductos()  → Promise<[{ id, nombre, precio }, ...]>
//   obtenerStock(id)    → Promise<{ id, unidades }>
//
// PARTE A (este archivo): con fetch.
//   - Comprueba respuesta.ok: si el archivo no existe, la tienda
//     tiene que mostrar el error, no quedarse colgada.
//   - Pista: una función auxiliar pedirJson(url) te evita repetir código
//     (es la pedir de la sesión 4, solo para JSON).
//
// PARTE B: abre api-axios.js y haz lo mismo con axios. Luego, en
// index.html, cambia api-fetch.js por api-axios.js. La tienda debe
// funcionar igual sin tocar tienda.js. ¿Por qué?
//
// Prueba los errores:
//   1. Renombra data/stock/3.json a 3.json.bak y recarga.
//      ¿Qué mensaje sale? Vuelve a dejarlo como estaba y pulsa Reintentar.
//   2. Para Live Server y pulsa Reintentar. ¿Qué mensaje sale ahora?
//      ¿Es el mismo tipo de error que el 1?
// =====================================================

// Tu código aquí:
