'use client';

import { motion } from 'framer-motion';

const entities = [
  'Gobernación de Arauca',
  'MinEducación',
  'Gobernación de Santander',
  'Alcaldía de Bogotá',
  'Gobernación del Vichada',
  'Universidad Distrital',
  'SENA',
  'Distrito de Cartagena'
];

const Trust = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
          Entidades que confían en nosotros
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex space-x-12 whitespace-nowrap"
        >
          {[...entities, ...entities].map((entity, i) => (
            <div
              key={i}
              className="text-2xl md:text-3xl font-black text-slate-200 hover:text-orange/20 transition-colors cursor-default select-none uppercase tracking-tighter"
            >
              {entity}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
