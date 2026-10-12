# CLAUDE.md

## Proyecto

Web institucional para Hermandad Nuestro Padre Jesús Nazareno de una hermandad cofrade y su agrupación musical.

El objetivo es desarrollar una web moderna, elegante, rápida, accesible y fácil de mantener, utilizando Astro y Tailwind CSS.

Consulta `PROJECT_CONTEXT.md` antes de implementar o modificar páginas relacionadas con el contenido, la identidad visual o la historia de la organización.

## Stack tecnológico

- Astro con TypeScript.
- Tailwind CSS utilizando la integración oficial compatible con las versiones instaladas.
- Astro Components (`.astro`) como opción predeterminada.
- JavaScript únicamente cuando sea necesario para interacciones reales.
- Contenido estático y archivos tipados para noticias, eventos y datos institucionales.
- npm como gestor de paquetes, salvo que el proyecto ya utilice otro.

Antes de instalar dependencias, comprueba las versiones y la configuración existente. Utiliza documentación oficial compatible con la versión del proyecto.

## Arquitectura

- Mantén las páginas en `src/pages/`.
- Utiliza `src/layouts/` para las estructuras compartidas.
- Divide los componentes por responsabilidad dentro de `src/components/`.
- Mantén los datos separados de las plantillas.
- Reutiliza componentes y estilos sin crear abstracciones innecesarias.
- Utiliza rutas limpias y una estructura de navegación coherente.
- Evita duplicar cabeceras, pies de página y estructuras comunes.
- No crees archivos, componentes o dependencias que no tengan una finalidad concreta.

## Diseño visual

- Prioriza una identidad visual propia, elegante y reconocible.
- El diseño debe transmitir tradición, solemnidad y cuidado estético sin parecer anticuado.
- Utiliza la paleta de colores y las referencias indicadas en `PROJECT_CONTEXT.md`.
- Prioriza las fotografías reales proporcionadas para representar la hermandad.
- Combina tipografía, espacio en blanco, jerarquía visual e imágenes con intención.
- Evita las plantillas genéricas, los degradados decorativos innecesarios y las tarjetas repetitivas.
- Mantén coherencia entre todas las páginas.
- Define tokens reutilizables para los colores y otros valores de diseño.

## Responsive y accesibilidad

- Diseña primero para móvil y adapta después a escritorio.
- Comprueba los principales tamaños de pantalla.
- Utiliza HTML semántico y una jerarquía correcta de encabezados.
- Incluye textos alternativos descriptivos para las imágenes informativas.
- Garantiza contraste suficiente, navegación por teclado y estados de foco visibles.
- El menú móvil debe funcionar realmente, no ser únicamente visual.
- Respeta las preferencias de movimiento reducido.

## Rendimiento y SEO

- Prioriza la generación estática de páginas cuando sea posible.
- Optimiza el tamaño de las imágenes y evita cargar recursos innecesarios.
- Utiliza metadatos específicos por página, títulos descriptivos y URLs legibles.
- Añade Open Graph básico para compartir páginas.
- Incluye sitemap y canonical cuando corresponda.
- Evita JavaScript del lado del cliente si no aporta funcionalidad.
- No añadas datos estructurados con información inventada.

## Calidad del código

- Mantén el código legible, tipado y fácil de mantener.
- No utilices `any` salvo que exista una justificación concreta.
- Evita comentarios muy extensos y redundantes y código innecesario.
- No introduzcas datos ficticios como si fueran información oficial.
- No elimines contenido, archivos o configuraciones existentes sin comprobar su finalidad.
- No instales dependencias sin una necesidad concreta.
- Comenta solamente código que sea muy necesario o funciones especificas, no comentes todo. 

## Forma de trabajar

1. Inspecciona el repositorio y su configuración antes de realizar cambios.
2. Identifica qué existe y qué falta.
3. Implementa la estructura solicitada de forma incremental.
4. Comprueba que el proyecto compila y que las rutas funcionan.
5. Ejecuta las comprobaciones disponibles y corrige los errores introducidos.
6. Resume los archivos importantes creados, las decisiones tomadas y cualquier tarea pendiente.

No te limites a describir lo que harías: implementa los cambios solicitados directamente en el repositorio.

No añadas funcionalidades que no formen parte del alcance actual.