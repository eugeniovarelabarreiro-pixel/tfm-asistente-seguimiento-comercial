# tfm-asistente-seguimiento-comercial

Asistente de seguimiento comercial - Trabajo Fin de Master (Master en Desarrollo con IA).

## Cómo se usa

El asistente registra visitas comerciales a partir de un dictado con etiquetas:

Centro: Hospital de Ejemplo; Contacto: Ana; Fecha visita: 2026-10-14; Resumen: Demostración; Siguiente paso: llamar a Ana; Responsable: Geni; Fecha paso: viernes

Si falta algún dato del siguiente paso, el asistente devuelve las preguntas que quedan pendientes. Las visitas se guardan en un archivo local y todos los datos de ejemplo son ficticios.

Además de las preguntas, el asistente devuelve un resultado comercial de una frase, que se construye con el resumen y el siguiente paso. Por ejemplo: "Demostración. Siguiente paso: llamar a Ana." Si faltan el responsable o la fecha, la frase termina con "Pendiente concretar responsable y fecha."
