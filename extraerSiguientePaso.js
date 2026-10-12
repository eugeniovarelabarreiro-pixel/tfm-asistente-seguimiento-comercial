function extraerSiguientePaso(texto) {
  const pedazos = texto.split(';').map(p => p.trim());
  const resultado = {};
  for (const p of pedazos) {
    if (!p.includes(":")) continue;
    const [clave, valor] = p.split(':');
    resultado[clave.trim().toLowerCase()] = valor.trim();
  }
  const faltan = ['acción', 'responsable', 'fecha'].filter(c => !resultado[c]);
  return { resultado, faltan };
}
