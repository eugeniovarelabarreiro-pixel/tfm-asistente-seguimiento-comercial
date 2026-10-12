# Asistente de seguimiento comercial con IA
Ficha de definición del TFM · 12/10/2026 · Propuesta para validar, no aplicación terminada.

## Hechos observados
El flujo de trabajo revisado parte de un dictado en castellano al terminar una visita o sesión. Con la señal "Listo", se prepara un report en inglés que comienza con "Dear Team". En algunos casos se pide además un "Commercial Outcome" breve para el Excel diario. El relato recoge centro y servicio, interlocutores, demostración, objeciones, reacción, resultado y siguiente paso.

## Problema que se propone resolver
Un report explica lo ocurrido, pero no siempre deja un seguimiento ejecutable: quién debe hacer qué, cuándo y con qué condición. Una fecha tentativa puede parecer una cita cerrada; el interés clínico o una intención condicional pueden confundirse con un pedido. La propuesta es unir el relato, la oportunidad y el siguiente paso sin añadir certezas que no existen.

## Qué haría el asistente (propuesta)
1. Recibir notas en castellano, escritas o transcritas de un dictado, y mantener el texto original para revisión.
2. Extraer una ficha de visita: centro, servicio, contacto, demostración, objeciones, resultado y evidencia del compromiso. Marcar lo que no consta.
3. Crear una oportunidad con estado explícito: interés, evaluación pendiente, intención condicional, solicitud o pedido confirmado. No saltar de estado sin evidencia.
4. Proponer el siguiente paso con acción, responsable, fecha y condición. Distinguir confirmado, tentativo y propuesto por la IA; pedir revisión si falta un dato.
5. Preparar un report en inglés ("Dear Team") y un "Commercial Outcome" corto, editables y copiables. Nada se envía ni se añade al Excel automáticamente.
6. Guardar historial por centro y mostrar los pasos pendientes, completados o reprogramados.

## Ejemplo ficticio
Entrada: "El equipo quiere probarlo. Quizá contacte la semana próxima para fijar la evaluación. Pedirían material si el resultado es bueno."
Salida: oportunidad = evaluación pendiente; pedido = no confirmado; siguiente paso = contactar y concretar evaluación; responsable = no consta; fecha = tentativa, sin día cerrado; condición = resultado favorable. Outcome: "Interés en evaluación; compra condicionada al resultado. Pendiente concretar fecha y responsable."

## Límites y validación
Para el TFM, solo datos ficticios: sin pacientes ni datos reales de centros, contactos o empresa. La IA propone; el usuario revisa y confirma. Primera prueba: comprobar con relatos ficticios que no inventa fechas, responsables ni pedidos y que report y outcome conservan el significado. Dictado integrado, conexión a Excel, stack, plazos y uso real quedan por validar; no se prometen como funciones ya hechas.

Base de la ficha: patrones de cinco reports revisados de la semana del 5 al 9 de octubre de 2026. No se comprueba aquí el estado actual de compromisos ni se reproducen chats privados. Esta ficha amplía el plan inicial; no sustituye sus contenidos ni supone un cambio de alcance aprobado para el MVP.
