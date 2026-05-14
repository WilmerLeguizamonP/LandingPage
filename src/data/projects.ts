export interface Project {
  id: string;
  titulo: string;
  descripcion: string;
  entidad: string;
  ubicacion: string;
  estado: 'ejecutado' | 'en ejecución';
  categoria: string;
  imagen: string;
}

export const projects: Project[] = [
  {
    id: 'urbanismo-tame',
    titulo: 'Mejoramiento red vial y urbanismo',
    descripcion: 'Proyecto integral de mejoramiento de la red vial urbana, incluyendo pavimentación, adecuación de andenes y sistemas de drenaje pluvial para optimizar la movilidad y el entorno urbano.',
    entidad: 'Gobernación de Arauca',
    ubicacion: 'Tame, Arauca',
    estado: 'ejecutado',
    categoria: 'Espacio Público',
    imagen: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80'
  },
  {
    id: 'revitaliza-barrio',
    titulo: 'Revitaliza tu Barrio',
    descripcion: 'Intervención de mejoramiento del entorno barrial a través de la adecuación de espacios públicos, zonas verdes y senderos peatonales, fomentando la cohesión social y la seguridad.',
    entidad: 'Secretaría Distrital del Hábitat',
    ubicacion: 'Bogotá D.C.',
    estado: 'ejecutado',
    categoria: 'Espacio Público',
    imagen: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80'
  },
  {
    id: 'subsidios-santander',
    titulo: 'Subsidios de mejoramiento rural y urbano',
    descripcion: 'Programa de intervención técnica para el mejoramiento de viviendas vulnerables, garantizando condiciones de habitabilidad, saneamiento y seguridad estructural.',
    entidad: 'Gobernación de Santander',
    ubicacion: 'Santander',
    estado: 'ejecutado',
    categoria: 'Vivienda',
    imagen: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    id: 'aulas-cumaribo',
    titulo: 'Construcción de aulas',
    descripcion: 'Edificación de infraestructura educativa modular y sostenible, diseñada para resistir las condiciones climáticas de la región y proporcionar espacios óptimos para el aprendizaje.',
    entidad: 'Gobernación del Vichada',
    ubicacion: 'Cumaribo, Vichada',
    estado: 'ejecutado',
    categoria: 'Edificaciones',
    imagen: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80'
  },
  {
    id: 'estaciones-policia-cartagena',
    titulo: 'Mejoramiento estaciones de policía',
    descripcion: 'Adecuación arquitectónica y reforzamiento de infraestructura para seguridad ciudadana, optimizando espacios operativos y de atención al público.',
    entidad: 'Distrito de Cartagena',
    ubicacion: 'Cartagena',
    estado: 'ejecutado',
    categoria: 'Edificaciones',
    imagen: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80'
  },
  {
    id: 'agua-leticia',
    titulo: 'Sistema de abastecimiento de agua potable',
    descripcion: 'Construcción y optimización de redes de acueducto y plantas de tratamiento para garantizar el acceso a agua segura en comunidades de la Amazonía.',
    entidad: 'Desarrollo Inteligente Amazónico',
    ubicacion: 'Licia, Amazonas',
    estado: 'ejecutado',
    categoria: 'Saneamiento Básico',
    imagen: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80'
  },
  {
    id: 'mineducacion-amazonas',
    titulo: 'Mejoramiento infraestructura educativa',
    descripcion: 'Intervenciones técnicas de mantenimiento y mejora en sedes educativas rurales y urbanas para el cumplimiento de estándares de calidad.',
    entidad: 'Ministerio de Educación',
    ubicacion: 'Amazonas, Nariño, Antioquia',
    estado: 'ejecutado',
    categoria: 'Educación',
    imagen: 'https://images.unsplash.com/photo-1523050853064-9099307779f4?auto=format&fit=crop&q=80'
  },
  {
    id: 'univ-distrital-cajica',
    titulo: 'Universidad Distrital Francisco José de Caldas',
    descripcion: 'Construcción de modernos laboratorios y espacios académicos para la sede regional, integrando tecnologías de vanguardia.',
    entidad: 'Universidad Distrital',
    ubicacion: 'Cajicá',
    estado: 'ejecutado',
    categoria: 'Educación',
    imagen: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80'
  },
  {
    id: 'sena-leticia',
    titulo: 'SENA Regional Amazonas',
    descripcion: 'Desarrollo de infraestructura para formación técnica avanzada en el corazón de la selva amazónica, respetando el entorno ambiental.',
    entidad: 'SENA',
    ubicacion: 'Leticia',
    estado: 'ejecutado',
    categoria: 'Educación',
    imagen: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80'
  },
  {
    id: 'ips-mosquera',
    titulo: 'IPS Centro de Salud',
    descripcion: 'Construcción de centros de salud de nivel primario con especificaciones técnicas hospitalarias para atención rural.',
    entidad: 'Distrito de Nariño',
    ubicacion: 'Mosquera, Nariño',
    estado: 'ejecutado',
    categoria: 'Hospitales',
    imagen: 'https://images.unsplash.com/photo-1586773860418-d319a39005c0?auto=format&fit=crop&q=80'
  },
  {
    id: 'hospital-zipaquira',
    titulo: 'Hospital Zipaquirá – Fase II',
    descripcion: 'Ejecución de obras complementarias y especializadas para la culminación de la fase II de uno de los hospitales más modernos de Cundinamarca.',
    entidad: 'Gobernación de Cundinamarca',
    ubicacion: 'Zipaquirá',
    estado: 'ejecutado',
    categoria: 'Hospitales',
    imagen: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80'
  },
  {
    id: 'distritos-riego-adr',
    titulo: 'Rehabilitación distritos de riego',
    descripcion: 'Optimización de sistemas de riego agrícola para mejorar la productividad de pequeños y medianos productores a nivel nacional.',
    entidad: 'ADR (Agencia de Desarrollo Rural)',
    ubicacion: 'Múltiples Departamentos',
    estado: 'ejecutado',
    categoria: 'Sistemas de Riego',
    imagen: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80'
  },
  {
    id: 'planta-platano-tame',
    titulo: 'Planta transformación de plátano',
    descripcion: 'Construcción de infraestructura agroindustrial para el procesamiento y valor agregado de productos agrícolas regionales.',
    entidad: 'Alcaldía de Tame',
    ubicacion: 'Tame, Arauca',
    estado: 'ejecutado',
    categoria: 'Plantas Agroindustriales',
    imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'
  }

];
