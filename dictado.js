const { registrarVisita, preguntasPendientes } = require('./visitas');


function buscarDato(texto, etiqueta) {
  const patron = new RegExp(etiqueta + ':\\s*([^;.]+)', 'i');
  const encontrado = texto.match(patron);
  return encontrado ? encontrado[1].trim() : '';
}


function leerDictado(texto) {
  return {
    centro: buscarDato(texto, 'Centro'),
    contacto: buscarDato(texto, 'Contacto'),
    fecha: buscarDato(texto, 'Fecha visita'),
    resumen: buscarDato(texto, 'Resumen'),
    siguientePaso: buscarDato(texto, 'Siguiente paso')
  };
}


function registrarDictado(texto) {
  const d = leerDictado(texto);
  const partes = [];
  if (d.siguientePaso) partes.push('Acción: ' + d.siguientePaso.replace(/^Acción:\s*/i, ''));
  const responsable = buscarDato(texto, 'Responsable');
  const fechaPaso = buscarDato(texto, 'Fecha paso');
  if (responsable) partes.push('Responsable: ' + responsable);
  if (fechaPaso) partes.push('Fecha: ' + fechaPaso);
  const faltan = registrarVisita(d.centro, d.contacto, d.fecha, d.resumen, partes.join('; '));
  return preguntasPendientes(faltan);
}


module.exports = { buscarDato, leerDictado, registrarDictado };
