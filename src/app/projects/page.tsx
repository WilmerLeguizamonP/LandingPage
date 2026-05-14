'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { MapPin, Building, ArrowRight, Filter } from 'lucide-react';

const categories = [
  'Todos',
  'Espacio Público',
  'Vivienda',
  'Edificaciones',
  'Saneamiento Básico',
  'Educación',
  'Hospitales',
  'Sistemas de Riego',
  'Plantas Agroindustriales'
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.categoria === filter);

  return (
    <main className="bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-40 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block">Portafolio</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Trayectoria <span className="gradient-text">Comprobable</span></h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Explora nuestra experiencia en obras civiles de alto impacto. Proyectos reales ejecutados bajo estándares de excelencia técnica.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 grid-overlay opacity-10" />
      </section>

      {/* Filter Section */}
      <section className="py-10 border-b border-slate-100 sticky top-[72px] bg-white/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4 md:hidden">
            <Filter size={18} className="text-orange" />
            <span className="font-bold text-slate-700">Filtrar por categoría</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === cat 
                  ? 'bg-orange text-white shadow-lg shadow-orange/30' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-padding min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 card-hover"
                >
                  {/* Project Image */}
                  <div className="h-64 bg-slate-100 relative overflow-hidden">
                    <img 
                      src={project.imagen} 
                      alt={project.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        project.estado === 'ejecutado' ? 'bg-green-100/90 text-green-700 backdrop-blur-md' : 'bg-orange-100/90 text-orange-700 backdrop-blur-md'
                      }`}>
                        {project.estado}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange mb-3">
                      {project.categoria}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-orange transition-colors">
                      {project.titulo}
                    </h3>
                    
                    <div className="space-y-3 mb-8 flex-grow">
                      <div className="flex items-start text-sm text-slate-500">
                        <Building size={16} className="mr-3 text-slate-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{project.entidad}</span>
                      </div>
                      <div className="flex items-start text-sm text-slate-500">
                        <MapPin size={16} className="mr-3 text-slate-400 shrink-0 mt-0.5" />
                        <span className="font-medium">{project.ubicacion}</span>
                      </div>
                    </div>

                    <Link 
                      href={`/projects/${project.id}`}
                      className="btn-secondary w-full py-3 flex items-center justify-center group/btn"
                    >
                      Ficha Técnica
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-slate-400 font-bold italic">No se encontraron proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
