const centros = [];

function guardarCentro(nombre, servicio, contactos) {
  const centro = { nombre, servicio, contactos };
  centros.push(centro);
  return centro;
}
