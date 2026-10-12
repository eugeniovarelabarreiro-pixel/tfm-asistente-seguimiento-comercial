const visita = {
  centro: "Hospital de Ejemplo",
  contacto: "Ana",
  fecha: "2026-10-14",
  resumen: "Demostración del equipo",
  siguientePaso: { acción: "llamar a Ana", responsable: "Geni", fecha: "viernes" }
};


const visitas = [];


function guardarVisita(visita) {
  visitas.push(visita);
  return visitas.length;
}


function visitasDeCentro(nombre) {
  return visitas.filter(v => v.centro === nombre);
}
