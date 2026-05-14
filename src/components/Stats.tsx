'use client';

import { motion } from 'framer-motion';
import { Target, Users, Briefcase, Award } from 'lucide-react';

const stats = [
  {
    label: 'Proyectos Ejecutados',
    value: '100+',
    icon: <Briefcase className="text-orange" size={24} />,
    suffix: 'A nivel nacional'
  },
  {
    label: 'Años de Trayectoria',
    value: '9+',
    icon: <Award className="text-orange" size={24} />,
    suffix: 'Desde 2017'
  },
  {
    label: 'Clientes Satisfechos',
    value: '50+',
    icon: <Users className="text-orange" size={24} />,
    suffix: 'Entidades y privados'
  },
  {
    label: 'Cumplimiento Técnico',
    value: '100%',
    icon: <Target className="text-orange" size={24} />,
    suffix: 'Estándares de calidad'
  }
];

const Stats = () => {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center relative overflow-hidden group hover:border-orange/20 transition-all"
            >
              <div className="w-12 h-12 bg-orange/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-[10px] text-slate-400 font-medium">{stat.suffix}</div>
              
              <div className="absolute top-0 left-0 w-1 h-0 bg-orange group-hover:h-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
