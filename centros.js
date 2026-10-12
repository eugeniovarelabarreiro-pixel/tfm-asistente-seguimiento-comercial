const centros = [];


function guardarCentro(nombre, servicio, contactos) {
  const centro = { nombre, servicio, contactos };
  centros.push(centro);
  return centro;
}
const fs = require("fs");

function guardarCentrosEnArchivo() {
  fs.writeFileSync("centros.json", JSON.stringify(centros, null, 2));
}

function cargarCentrosDeArchivo() {
  if (fs.existsSync("centros.json")) {
    centros.push(...JSON.parse(fs.readFileSync("centros.json", "utf8")));
  }
}
