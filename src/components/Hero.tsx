'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Cpu, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110"
          style={{ backgroundImage: 'url("/assets/images/hero.png")' }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange text-xs font-bold uppercase tracking-widest mb-6">
              Innovación en Construcción • Desde 2017
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
          >
            Transformando paisajes con <span className="gradient-text">Ingeniería Avanzada</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
          >
            Especialistas en soluciones civiles, arquitectónicas y construcción sostenible. 
            Calidad técnica respaldada por trayectoria real en proyectos de gran impacto nacional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/projects" className="btn-primary flex items-center justify-center group">
              Explorar Proyectos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link href="#servicios" className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white hover:text-slate-900 flex items-center justify-center">
              Nuestros Servicios
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center text-orange">
                <ShieldCheck size={20} />
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">Confianza Real</p>
                <p className="text-slate-400">NIT: 901116527-7</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center text-orange">
                <Cpu size={20} />
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">Tecnología</p>
                <p className="text-slate-400">Ingeniería de Vanguardia</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center text-orange">
                <Leaf size={20} />
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">Sostenible</p>
                <p className="text-slate-400">Impacto Positivo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;
