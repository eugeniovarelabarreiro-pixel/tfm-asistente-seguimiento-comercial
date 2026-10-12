const { DatabaseSync } = require("node:sqlite");

const db = new DatabaseSync("asistente.db");

db.exec(`CREATE TABLE IF NOT EXISTS visitas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  centro TEXT,
  contacto TEXT,
  fecha TEXT,
  resumen TEXT,
  accion TEXT,
  responsable TEXT,
  fecha_paso TEXT
)`);

function guardarVisita(visita) {
  const paso = visita.siguientePaso;
  const stmt = db.prepare("INSERT INTO visitas (centro, contacto, fecha, resumen, accion, responsable, fecha_paso) VALUES (?, ?, ?, ?, ?, ?, ?)");
  const resultado = stmt.run(visita.centro, visita.contacto, visita.fecha, visita.resumen, paso["acción"] ?? null, paso.responsable ?? null, paso.fecha ?? null);
  return resultado.lastInsertRowid;
}

module.exports = { db, guardarVisita };
