'use client';

import { motion } from 'framer-motion';
import { HardHat, Landmark, Droplets, GraduationCap, Hospital, Tractor, Factory, Home } from 'lucide-react';

const services = [
  {
    title: 'Ingeniería Civil',
    desc: 'Diseño, planeación y ejecución de obras de infraestructura vial, urbanismo y redes de transporte con altos estándares técnicos.',
    icon: <HardHat size={32} />,
    category: 'Infraestructura',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80'
  },
  {
    title: 'Arquitectura y Edificación',
    desc: 'Desarrollo de proyectos arquitectónicos integrales, desde viviendas hasta complejos educativos y gubernamentales.',
    icon: <Landmark size={32} />,
    category: 'Construcción',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  },
  {
    title: 'Saneamiento Básico',
    desc: 'Sistemas de abastecimiento de agua potable, alcantarillado y plantas de tratamiento de aguas residuales.',
    icon: <Droplets size={32} />,
    category: 'Medio Ambiente',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80'
  },
  {
    title: 'Infraestructura Educativa',
    desc: 'Especialistas en construcción y mejoramiento de aulas, laboratorios y sedes para el Ministerio de Educación y universidades.',
    icon: <GraduationCap size={32} />,
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1523050853064-9099307779f4?auto=format&fit=crop&q=80'
  },
  {
    title: 'Centros Hospitalarios',
    desc: 'Ejecución de obras con especificaciones hospitalarias rigurosas, garantizando entornos de salud seguros y funcionales.',
    icon: <Hospital size={32} />,
    category: 'Salud',
    image: 'https://images.unsplash.com/photo-1586773860418-d319a39005c0?auto=format&fit=crop&q=80'
  },
  {
    title: 'Sistemas de Riego',
    desc: 'Rehabilitación y optimización de distritos de riego para el fortalecimiento de la productividad agropecuaria.',
    icon: <Tractor size={32} />,
    category: 'Agrícola',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80'
  },
  {
    title: 'Plantas Agroindustriales',
    desc: 'Infraestructura especializada para la transformación de productos agrícolas, impulsando la economía regional.',
    icon: <Factory size={32} />,
    category: 'Industria',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'
  },
  {
    title: 'Vivienda y Hábitat',
    desc: 'Programas de mejoramiento rural y urbano encaminados a dignificar la vida de las familias colombianas.',
    icon: <Home size={32} />,
    category: 'Vivienda',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'
  }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Qué Hacemos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Soluciones Integrales de <span className="gradient-text">Ingeniería</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Nuestra capacidad técnica nos permite abordar proyectos de diversa complejidad en múltiples sectores, garantizando eficiencia y sostenibilidad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 card-hover group overflow-hidden"
            >
              {/* Background Image on Hover */}
              <div className="absolute inset-0 z-0 transition-all duration-500 opacity-0 group-hover:opacity-10 scale-110 group-hover:scale-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange mb-6 group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">
                  {service.category}
                </span>
                <h3 className="text-xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="w-10 h-1 bg-orange/20 rounded-full group-hover:w-full group-hover:bg-orange transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
    </section>
  );
};

export default Services;
