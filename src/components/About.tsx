'use client';

import { motion } from 'framer-motion';
import { Target, Eye, ShieldAlert, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Misión',
      desc: 'Proporcionar soluciones innovadoras y de alta calidad en ingeniería civil, arquitectónica y construcción, impulsando el desarrollo sostenible y la eficiencia tecnológica.',
      icon: <Target className="text-orange" size={24} />,
      color: 'bg-orange/10'
    },
    {
      title: 'Visión',
      desc: 'Ser líderes en innovación y sostenibilidad en el sector de la construcción, transformando paisajes urbanos y rurales mediante tecnologías de vanguardia y prácticas responsables.',
      icon: <Eye className="text-orange" size={24} />,
      color: 'bg-orange/10'
    },
    {
      title: 'Política SST',
      desc: 'Compromiso con la identificación de peligros, evaluación y control de riesgos, mejoramiento continuo y protección del medio ambiente.',
      icon: <ShieldAlert className="text-orange" size={24} />,
      color: 'bg-orange/10'
    }
  ];

  return (
    <section id="nosotros" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Tech Image - More visible */}
      <div className="absolute inset-0 opacity-[0.08] grayscale pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" 
          alt="Tech background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-50/50 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block">Nuestra Identidad</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              3G Ingeniería Avanzada: <span className="gradient-text">Excelencia Técnica</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Constituida el 21 de septiembre de 2017 en Bogotá D.C., nuestra empresa ha crecido bajo el liderazgo de Sandra Milena Galvis, consolidándose como una mediana empresa referente en el sector. 
              Nos especializamos en transformar desafíos técnicos en infraestructuras duraderas y funcionales.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Cumplimiento estricto de normatividad legal',
                'Uso de tecnologías de construcción de vanguardia',
                'Compromiso innegociable con la seguridad laboral',
                'Enfoque en sostenibilidad y desarrollo rural'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="text-orange shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-black text-orange">9+</div>
                <div className="text-sm text-slate-500 font-bold leading-tight uppercase tracking-wider">
                  Años de<br />Experiencia
                </div>
                <div className="w-px h-10 bg-slate-200 mx-4" />
                <div className="text-3xl font-black text-slate-900">100%</div>
                <div className="text-sm text-slate-500 font-bold leading-tight uppercase tracking-wider">
                  Proyectos<br />Ejecutados
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-72 rounded-3xl overflow-hidden shadow-xl border border-white/50 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-8">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-8 h-px bg-orange" />
                  <span className="text-orange font-bold text-xs uppercase tracking-widest">3G Avanzada</span>
                </div>
                <h4 className="text-white font-black text-2xl tracking-tighter">Innovación Estructural</h4>
              </div>
            </motion.div>

            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-orange/20 transition-all card-hover"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
