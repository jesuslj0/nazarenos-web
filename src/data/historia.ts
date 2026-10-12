export interface Hito {
  when: string;
  title: string;
  text: string;
}

export const hermandadResumen = [
  'La cofradía Nuestro Padre Jesús Nazareno es una de las más antiguas que recorren las calles de El Bonillo en Semana Santa. Tanto por el número de sus integrantes como por su gran tradición, es una cofradía de obligada referencia en la Semana Santa bonillera.',
  'Buen ejemplo de ello es el libro «225 años caminando con el Nazareno», de Ramón Fernández Chillerón, publicado en 2007, una magnífica obra sobre la historia y la idiosincrasia de la hermandad.',
];

export const hermandadHitos: Hito[] = [
  {
    when: '1782',
    title: 'Fundación de la hermandad',
    text: 'Origen de la devoción que desde entonces reúne a los bonilleros en torno a Nuestro Padre Jesús Nazareno.',
  },
  {
    when: 'Guerra Civil',
    title: 'Destrucción de la imagen',
    text: 'La imagen de Jesús Nazareno fue destruida en tiempos de la Guerra Civil Española.',
  },
  {
    when: '1942',
    title: 'Nueva imagen del Nazareno',
    text: 'Se adquiere por suscripción popular la nueva imagen de Nuestro Padre Jesús Nazareno.',
  },
  {
    when: '1957',
    title: 'Jesús de Medinaceli',
    text: 'Según acta de este año, la hermandad cuenta en propiedad con el paso de Jesús de Medinaceli.',
  },
  {
    when: '1991',
    title: 'Adquisición de Jesús Resucitado',
    text: 'La hermandad adquiere el paso de Jesús Resucitado.',
  },
  {
    when: '1995',
    title: 'Adquisición de La Piedad',
    text: 'Se incorpora al patrimonio de la hermandad el paso de La Piedad.',
  },
  {
    when: '2007',
    title: '«225 años caminando con el Nazareno»',
    text: 'Ramón Fernández Chillerón publica la obra de referencia sobre la historia de la hermandad.',
  },
  {
    when: '2014',
    title: 'Nueva imagen de Jesús Resucitado',
    text: 'Se incorpora una nueva imagen de Jesús Resucitado, tallada en madera con los mismos rasgos que la imagen de Nuestro Padre Jesús Nazareno.',
  },
];

export const agrupacionResumen = [
  'La Agrupación Musical tuvo su aparición hacia los años 40 del siglo XX, formándose de una humilde banda de cornetas y tambores.',
  'Música, sentimiento y pasión caracterizan a esta notable agrupación, cuyas magnum opus, interpretadas en la semana más santa, nos estremecen a los pies del Nazareno.',
];

export const agrupacionHitos: Hito[] = [
  {
    when: 'Años 40',
    title: 'Los orígenes',
    text: 'Aparece como una humilde banda de cornetas y tambores.',
  },
  {
    when: 'Años 60',
    title: 'Consolidación',
    text: 'Una férrea disciplina en su organización y la profesionalidad de sus miembros, la mayoría con experiencia musical del ejército, elevan el nivel de la banda año tras año.',
  },
  {
    when: 'Años 80',
    title: 'Primeros cambios',
    text: 'Tras superar los difíciles años de la emigración, comienzan a renovarse las marchas, las composiciones del repertorio y la vestimenta de los músicos.',
  },
  {
    when: 'Años 90',
    title: 'Una nueva etapa',
    text: 'Crece sin parangón: se dejan atrás las marchas militares y las cornetas largas, y se adquiere nuevo instrumental (tambores, timbales, cornetas de pistones y de llaves, fliscornos, bombardinos, tubas, trombones y platos) para convertirse en agrupación musical.',
  },
  {
    when: '2006',
    title: 'Nuevo uniforme',
    text: 'Coincidiendo con el II Certamen de Bandas de Cornetas y Tambores de la localidad, es pionera en El Bonillo al incorporar un uniforme apto para este tipo de eventos, con su singular color nazareno.',
  },
  {
    when: '2012',
    title: 'Primer disco',
    text: 'Se propone uno de sus mayores retos: la grabación de un disco compacto con varias de las obras de su repertorio.',
  },
  {
    when: '2015',
    title: 'Sones de Música Cofrade',
    text: 'Participa en la grabación de «Sones de Música Cofrade – Semana Santa El Bonillo», editado por el Excmo. Ayuntamiento de El Bonillo.',
  },
  {
    when: '10 de marzo de 2023',
    title: 'Presentación de nuevos uniformes',
    text: 'Presentación de los nuevos uniformes de la agrupación.',
  },
];

export interface Obra {
  title: string;
  composer: string;
}

export const repertorio: Obra[] = [
  { title: 'Callejuela de la O', composer: 'Paco Lola' },
  { title: 'Judería Sevillana', composer: 'Alejandro Blanco Hernández' },
  { title: 'Costaleros Gitanos', composer: 'Pedro Manuel Pacheco Palomo' },
  { title: 'Estrella Reina del Cielo', composer: 'José Manuel Mena Hervás' },
  { title: '¡A la Gloria!', composer: 'Miguel Ángel Font' },
  { title: 'Señor de San Esteban', composer: 'Emilio Muñoz Serna' },
  { title: 'Amor en tu Mirada', composer: 'Juan Francisco Algarra Pérez' },
  {
    title: 'Señor de San Román',
    composer: 'Emilio Muñoz Serna (re-armonizada posteriormente)',
  },
  { title: 'Costaleros del amor', composer: 'Alejandro Moreno Rodríguez' },
];
