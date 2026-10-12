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

module.exports = { buscarDato, leerDictado };
