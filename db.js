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

module.exports = { db };
