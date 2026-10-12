const { extraerSiguientePaso } = require('./extraerSiguientePaso');

const visita = {
  centro: 'Hospital de Ejemplo',
  contacto: 'Ana',
  fecha: '2026-10-14',
  resumen: 'Demostración del equipo',
  siguientePaso: { acción: 'llamar a Ana', responsable: 'Geni', fecha: 'viernes' }
};


const visitas = [];


function guardarVisita(visita) {
  visitas.push(visita);
  return visitas.length;
}


function visitasDeCentro(nombre) {
  return visitas.filter(v => v.centro === nombre);
}


const fs = require("fs");

function guardarEnArchivo() {
  fs.writeFileSync("visitas.json", JSON.stringify(visitas, null, 2));
}

function cargarDeArchivo() {
  if (fs.existsSync("visitas.json")) {
    const guardadas = JSON.parse(fs.readFileSync("visitas.json", "utf8"));
    visitas.push(...guardadas);
  }
}

function registrarVisita(centro, contacto, fecha, resumen, textoSiguientePaso) {
  const { resultado, faltan } = extraerSiguientePaso(textoSiguientePaso);
  const visita = { centro, contacto, fecha, resumen, siguientePaso: resultado };
  guardarVisita(visita);
  guardarEnArchivo();
  return faltan;
}

module.exports = { registrarVisita, visitasDeCentro };
