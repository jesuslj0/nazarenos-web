export const site = {
  name: 'Hermandad de Nuestro Padre Jesús Nazareno',
  shortName: 'Nuestro Padre Jesús Nazareno',
  locality: 'El Bonillo (Albacete)',
  founded: 1782,
  canonicalSeat: 'Parroquia Santa Catalina',
  description:
    'Web institucional de la Hermandad de Nuestro Padre Jesús Nazareno y de su Agrupación Musical en El Bonillo, Albacete. Historia, titulares, actualidad y contacto.',
  agrupacion: {
    name: 'Agrupación Musical Nuestro Padre Jesús Nazareno',
    shortName: 'AM Ntro. Padre Jesús Nazareno',
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Hermandad', href: '/hermandad/' },
  { label: 'Agrupación', href: '/agrupacion/' },
  { label: 'Galería e Historia', href: '/galeria-historia/' },
  { label: 'Actualidad', href: '/actualidad/' },
  { label: 'Contacto', href: '/contacto/' },
];

export interface SocialLink {
  network: string;
  handle: string;
  href: string;
}

export const socials: SocialLink[] = [
  {
    network: 'Instagram',
    handle: '@amj.nazarenoelbonillo',
    href: 'https://www.instagram.com/amj.nazarenoelbonillo/',
  },
  {
    network: 'TikTok',
    handle: '@amj.nazarenoelbonillo',
    href: 'https://www.tiktok.com/@amj.nazarenoelbonillo',
  },
  {
    network: 'Facebook',
    handle: 'AM Ntro. Padre Jesús Nazareno El Bonillo',
    href: 'https://www.facebook.com/p/AM-Ntro-Padre-Jes%C3%BAs-Nazareno-El-Bonillo-100063969043303/',
  },
];

/** Datos de contacto: `null` indica que el dato aún no se ha facilitado. */
export const contact = {
  email: null as string | null,
  phone: null as string | null,
  postalAddress: null as string | null,
  contratacion: null as string | null,
  seatMapUrl:
    'https://www.google.com/maps/search/?api=1&query=Parroquia+Santa+Catalina+El+Bonillo+Albacete',
};
