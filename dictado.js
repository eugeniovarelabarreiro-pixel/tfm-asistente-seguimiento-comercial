function buscarDato(texto, etiqueta) {
  const patron = new RegExp(etiqueta + ":\\s*([^;.]+)", "i");
  const encontrado = texto.match(patron);
  return encontrado ? encontrado[1].trim() : "";
}

module.exports = { buscarDato };
