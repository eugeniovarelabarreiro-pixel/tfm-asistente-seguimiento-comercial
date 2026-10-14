# tfm-asistente-seguimiento-comercial

Asistente de seguimiento comercial - Trabajo Fin de Master (Master en Desarrollo con IA).

## Cómo se usa

El asistente registra visitas comerciales a partir de un dictado con etiquetas:

Centro: Hospital de Ejemplo; Contacto: Ana; Fecha visita: 2026-10-14; Resumen: Demostración; Siguiente paso: llamar a Ana; Responsable: Geni; Fecha paso: viernes

Si falta algún dato del siguiente paso, el asistente devuelve las preguntas que quedan pendientes. Las visitas se guardan en un archivo local y todos los datos de ejemplo son ficticios.

Además de las preguntas, el asistente devuelve un resultado comercial de una frase, que se construye con el resumen y el siguiente paso. Por ejemplo: "Demostración. Siguiente paso: llamar a Ana." Si faltan el responsable o la fecha, la frase termina con "Pendiente concretar responsable y fecha."

## Instalación y ejecución

Probado con Node.js 22.23.3. El proyecto usa node:sqlite, incluido en Node; no requiere instalar paquetes con npm.

    git clone https://github.com/eugeniovarelabarreiro-pixel/tfm-asistente-seguimiento-comercial
    cd tfm-asistente-seguimiento-comercial
    node prueba.js

La prueba guarda una visita ficticia en asistente.db y un centro ficticio en centros.json, y muestra las preguntas pendientes y el resultado por pantalla. Cada ejecución añade otra visita de ejemplo. En la versión probada aparece un aviso de SQLite experimental, pero la prueba termina correctamente.
