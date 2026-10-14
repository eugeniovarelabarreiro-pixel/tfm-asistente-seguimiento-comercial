// prueba.js
const { guardarCentro, guardarCentrosEnArchivo } = require("./centros");
const { registrarVisita, visitasDeCentro, resultadoComercial } = require("./visitas");

guardarCentro("Hospital de Ejemplo", "Traumatología", ["Ana", "Luis"]);
guardarCentrosEnArchivo();

const faltan = registrarVisita("Hospital de Ejemplo", "Ana", "2026-10-14", "Demostración", "Acción: llamar a Ana");
console.log("Faltan:", faltan);
console.log(visitasDeCentro("Hospital de Ejemplo"));
console.log(resultadoComercial(visitasDeCentro("Hospital de Ejemplo").at(-1)));
