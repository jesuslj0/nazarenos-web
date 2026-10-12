# PROJECT_CONTEXT.md

## 1. Información general

- Nombre oficial: Nuestro Padre Jesús Nazareno
- Localidad: El Bonillo, Albacete
- Nombre de la agrupación musical: Agrupación Musical Nuestro Padre Jesús Nazareno
- Abreviación: AM Ntro. Padre Jesús Nazareno 
- Año de fundación: 1782
- Sede canónica: Parroquia Santa Catalina
- Sitio web: Este (no hay)
- Redes sociales: Instagram: @amj.nazarenoelbonillo, Tiktok: @amj.nazarenoelbonillo, Facebook: AM Ntro. Padre Jesús Nazareno El Bonillo
- Idioma principal: Español.

## 2. Objetivo de la web

Crear una web institucional que represente a la hermandad y a su agrupación musical, permita consultar su historia y actividad y sirva como punto central de información para hermanos, devotos, músicos y visitantes.

La web debe transmitir identidad, tradición, seriedad y cercanía.

Debe poder ampliarse posteriormente con más noticias, eventos, galerías fotográficas, información musical y otros apartados.

## 3. Historia y contexto

Leer archivo historia-hermandad.txt en la raíz del proyecto para extraer información.

Datos relevantes:
- Fundación y evolución histórica.
- Titulares y advocaciones.
- Pasos procesionales y patrimonio.
- Tradiciones y celebraciones.
- Hitos históricos importantes.

## Datos de titulares:

Nuestros titulares

La Hermandad de Nuestro Padre Jesús Nazareno custodia y rinde culto a tres imágenes que representan momentos esenciales del misterio pascual de Cristo. En torno a ellas gira la vida espiritual de nuestra corporación y la devoción de generaciones de hermanos y fieles de El Bonillo.
Nuestro Padre Jesús Nazareno

Nuestro Padre Jesús Nazareno es el Titular principal de la Hermandad y el centro de la devoción que, desde 1782, ha reunido a miles de bonilleros bajo su mirada misericordiosa.

Representa a Cristo cargando con la Cruz camino del Calvario, imagen de sacrificio, entrega y redención. Su presencia ha acompañado a numerosas generaciones, convirtiéndose en uno de los símbolos más queridos y representativos de la fe de nuestro pueblo.
Nuestra Señora de la Piedad

Nuestra Señora de la Piedad contempla el dolor más profundo de una madre que sostiene en sus brazos el cuerpo sin vida de su Hijo.

Esta advocación nos recuerda el amor incondicional, la fortaleza ante la adversidad y la esperanza que brota incluso en los momentos más difíciles. Bajo su mirada maternal, los hermanos encuentran consuelo, protección y ejemplo de fe.
Jesús Resucitado

Con Jesús Resucitado culmina el mensaje de la Semana Santa. Tras la Pasión y la Muerte, la Resurrección nos anuncia la victoria definitiva de Cristo sobre el pecado y la muerte.

Su imagen representa la alegría de la Pascua y la certeza de la esperanza cristiana. Es el recordatorio de que la luz siempre vence a la oscuridad y de que la fe encuentra su plenitud en la Resurrección del Señor.

 
Las imágenes de Nuestro Padre Jesús Nazareno, Nuestra Señora de la Piedad y Jesús Resucitado constituyen el corazón espiritual de nuestra Hermandad. En ellas se resume el misterio de la Pasión, Muerte y Resurrección de Jesucristo, fundamento de nuestra fe y motivo de nuestra existencia como comunidad cristiana.


Historia de la agrupación musical:

Datos relevantes:
- Año de fundación.
- Evolución musical.
- Repertorio y composiciones destacadas.
- Actuaciones y participaciones relevantes.
- Información sobre contratación, si corresponde.

No inventar fechas, acontecimientos, nombres, cargos ni datos históricos. Si falta información, utilizar un marcador provisional claramente identificable.

## 4. Identidad visual
Imagen de referencia para extraer colores: src/assets/images/agrupacion/escudo-agrupacion.jpeg

Colores principales:
- Color principal: (Extraer morado de la imagen)
- Color secundario: (Extraer dorado de la imagen)
- Color de acento: Morado
- Fondo principal: Morado muy oscuro 
- Color de texto: Blanco  

Elementos de identidad disponibles:
- Escudo oficial: src/assets/images/hermandad/escudo-hermandad.png
- Logotipo de la agrupación: src/assets/images/agrupacion/escudo-agrupacion.jpeg
- Tipografías: Default

Dirección visual:

Estética oscura y minimalista, pero elegante y con carácter. Debe transmitir sobriedad, tradición y elegancia, pero con estilo propio y moderno.

Referencias:
- Webs que me gustan: [URLS]
- Diseños o elementos que quiero evitar: No quiero que parezca una landing page de producto ni de tecnología, quiero una web corporativa elegante y ligada a lo espiritual. 

## 5. Imágenes disponibles

Las imágenes propias del proyecto están en `src/assets/images/` (Astro las optimiza en la compilación; en `public/` solo van los favicons). Cada imagen nueva debe registrarse en `src/data/images.ts`.

- `src/assets/images/hero/`: fotografías para la portada.
- `src/assets/images/hermandad/`: imágenes de la hermandad, titulares, patrimonio y procesiones.
- `src/assets/images/agrupacion/`: fotografías de músicos, instrumentos, actuaciones y conciertos.

Utilizar primero las imágenes reales disponibles y seleccionar las adecuadas para cada sección.

No inventar nombres de archivos ni asumir que existen imágenes que todavía no se han proporcionado.

Si falta una imagen, dejar un espacio previsto para ella o utilizar un recurso provisional claramente identificable.

## 6. Estructura de páginas

### Inicio
- Cabecera y navegación principal.
- Portada visual con fotografía destacada.
- Presentación breve de la hermandad.
- Acceso destacado a la agrupación musical.
- Últimas noticias.
- Próximos eventos.
- Acceso a redes sociales.
- Pie de página institucional.

### Hermandad
- Presentación institucional.
- Historia.
- Titulares y patrimonio, según la información disponible.
- Sede canónica y datos de interés.

### Agrupación musical
- Presentación.
- Historia.
- Repertorio.
- Actuaciones y actividad musical.
- Información de contacto o contratación.

### Galería e Historia
- Introducción.
- Galería de imágenes.
- Archivos históricos. 

### Actualidad y Eventos
- Listado de noticias.
- Fecha, título, imagen y resumen.
- Página individual de cada noticia.
- Orden cronológico descendente.
- Listado de eventos próximos y pasados.
- Fecha, título, lugar y descripción.
- Diferenciación visual entre eventos futuros y finalizados.

### Contacto
- Información de contacto disponible.
- Enlaces a redes sociales.
- Ubicación, si se dispone de ella.
- Formulario únicamente si resulta necesario.

## 7. Contenido y mantenimiento

Durante esta primera fase, el contenido será estático y estará organizado en archivos fáciles de editar.

Las noticias y los eventos deberán poder añadirse sin modificar los componentes de presentación.

No se necesita inicialmente una base de datos, un panel de administración ni un sistema de usuarios.

## 8. Alcance inicial

Construir una primera versión funcional y visualmente coherente de todas las páginas principales.

Prioridades:
1. Identidad visual.
2. Portada y navegación.
3. Estructura de las páginas.
4. Componentes compartidos.
5. Noticias y eventos con datos editables.
6. Diseño responsive.
7. SEO técnico básico y rendimiento.

Las funcionalidades futuras se estudiarán en una fase posterior.