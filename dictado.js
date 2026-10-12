const { registrarVisita, preguntasPendientes } = require("./visitas");

function buscarDato(texto, etiqueta) {
  const patron = new RegExp(etiqueta + ":\\s*([^;.]+)", "i");
  const encontrado = texto.match(patron);
  return encontrado ? encontrado[1].trim() : "";
}

function leerDictado(texto) {
  return {
    centro: buscarDato(texto, "Centro"),
    contacto: buscarDato(texto, "Contacto"),
    fecha: buscarDato(texto, "Fecha visita"),
    resumen: buscarDato(texto, "Resumen"),
    siguientePaso: buscarDato(texto, "Siguiente paso")
  };
}

function registrarDictado(texto) {
  const d = leerDictado(texto);
  const paso = d.siguientePaso.includes(":") ? d.siguientePaso : (d.siguientePaso ? "Acción: " + d.siguientePaso : "");
  const faltan = registrarVisita(d.centro, d.contacto, d.fecha, d.resumen, paso);
  return preguntasPendientes(faltan);
}

module.exports = { buscarDato, leerDictado, registrarDictado };
