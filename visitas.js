const { extraerSiguientePaso } = require('./extraerSiguientePaso');
const { guardarVisita: guardarVisitaEnBD } = require('./db');

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
 guardarVisitaEnBD(visita);
 guardarVisita(visita);
 return faltan;
}

function preguntasPendientes(faltan) {
 const preguntas = {
 "acción": "¿Qué vas a hacer como siguiente paso?",
 "responsable": "¿Quién se encarga?",
 "fecha": "¿Para cuándo?"
 };
 return faltan.map(f => preguntas[f]);
}

function resumenVisita(v) {
 const p = v.siguientePaso;
 return `${v.fecha} - ${v.centro} (${v.contacto}): ${v.resumen}. Siguiente paso: ${p["acción"] || "sin definir"}, responsable ${p.responsable || "sin definir"}, fecha ${p.fecha || "sin definir"}.`;
}

function visitasIncompletas() {
  return visitas.filter(v => !v.siguientePaso.responsable || !v.siguientePaso.fecha);
}

function listaPendientes() {
  const pendientes = visitasIncompletas();
  if (pendientes.length === 0) return "No tienes visitas pendientes de cerrar.";
  return pendientes.map(resumenVisita).join("\n");
}

function completarSiguientePaso(visita, datos) {
  visita.siguientePaso = { ...visita.siguientePaso, ...datos };
  guardarEnArchivo();
  return visita;
}

module.exports = { registrarVisita, visitasDeCentro, preguntasPendientes, resumenVisita, visitasIncompletas, listaPendientes, completarSiguientePaso };
