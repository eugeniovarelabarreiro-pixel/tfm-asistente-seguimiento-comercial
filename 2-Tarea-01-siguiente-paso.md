# Tarea 1: del dictado al siguiente paso
Guía de práctica · 12/10/2026 · Solo datos ficticios

## Qué vas a construir
Una función llamada `extraerSiguientePaso` que recibe texto y devuelve acción, responsable y fecha. Si falta un dato, devuelve "no consta"; no lo inventa.

Primera versión: texto con etiquetas fijas, no extracción libre con IA. Puedes dictarlo así y revisar la transcripción. No graba audio, no envía nada ni llama a una API.

## Lenguaje propuesto, no decidido
El plan existente sugiere Next.js, SQLite o Supabase y una API de IA, pero lo marca como supuesto. Para esta primera práctica propongo JavaScript, sin instalar una app ni montar una base de datos. El stack final sigue pendiente.

## Ejemplo ficticio
Entrada:
"Acción: contactar para fijar una evaluación; Responsable: Ana; Fecha: 2026-10-20"

Salida esperada:
- Acción: contactar para fijar una evaluación.
- Responsable: Ana.
- Fecha: 2026-10-20 (copiada del texto, no cita confirmada).

## Haz solo esto
1. Escribe tú la función: separa el texto por punto y coma y lee el valor de cada etiqueta. Quita espacios sobrantes. Si una etiqueta falta o está vacía, usa "no consta".
2. Pruébala con el ejemplo. Después borra "Responsable: Ana": debe devolver "no consta" en responsable y mantener los otros valores.
3. Cambia la fecha por "quizá la semana próxima": consérvala como texto tentativo, sin convertirla en una fecha concreta. Enséñame tu intento y lo revisamos.

En el iPhone basta con leer la guía y preparar el ejemplo en Notas. Para escribir y probar la función, mejor el Mac, con el editor que uses en clase. No hace falta empezar hoy con Next.js.

## Cuándo está terminada
El ejemplo da los tres valores; un dato ausente no se inventa; una fecha tentativa no se presenta como confirmada. Esto no detecta pedidos ni entiende cualquier relato: la extracción libre con IA será una tarea posterior.

Tú escribes el código y lo explicas con tus palabras. Esta guía no contiene una solución para entregar.
