const { extraerSiguientePaso } = require('./extraerSiguientePaso');
const { db, guardarVisita: guardarVisitaEnBD } = require('./db');

const visita = {
 centro: 'Hospital de Ejemplo',
 contacto: 'Ana',
 fecha: '2026-10-14',
 resumen: 'Demostración del equipo',
 siguientePaso: { acción: 'llamar a Ana', responsable: 'Geni', fecha: 'viernes' }
};

const visitas = db.prepare("SELECT * FROM visitas ORDER BY id").all().map(fila => {
 const siguientePaso = {};
 if (fila.accion !== null) siguientePaso["acción"] = fila.accion;
 if (fila.responsable !== null) siguientePaso.responsable = fila.responsable;
 if (fila.fecha_paso !== null) siguientePaso.fecha = fila.fecha_paso;
 return {
  id: fila.id,
  centro: fila.centro,
  contacto: fila.contacto,
  fecha: fila.fecha,
  resumen: fila.resumen,
  siguientePaso
 };
});

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
 visita.id = guardarVisitaEnBD(visita);
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

function resultadoComercial(v) {
  const p = v.siguientePaso;
  const faltan = [];
  if (!p.responsable) faltan.push("responsable");
  if (!p.fecha) faltan.push("fecha");
  const pendiente = faltan.length ? ` Pendiente concretar ${faltan.join(" y ")}.` : "";
  const resumen = (v.resumen || "Sin resumen").replace(/[.\s]+$/, "");
  return `${resumen}. Siguiente paso: ${p["acción"] || "sin definir"}.${pendiente}`;
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
  const p = visita.siguientePaso;
  db.prepare("UPDATE visitas SET accion = ?, responsable = ?, fecha_paso = ? WHERE id = ?").run(p["acción"] ?? null, p.responsable ?? null, p.fecha ?? null, visita.id);
  guardarEnArchivo();
  return visita;
}

module.exports = { registrarVisita, visitasDeCentro, preguntasPendientes, resumenVisita, resultadoComercial, visitasIncompletas, listaPendientes, completarSiguientePaso };
