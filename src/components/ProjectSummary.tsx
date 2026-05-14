'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MapPin, Building } from 'lucide-react';
import { projects } from '@/data/projects';

const ProjectSummary = () => {
  // Take first 3 projects for the summary
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="section-padding bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              Trayectoria Real
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mb-6 leading-tight"
            >
              Proyectos que <span className="gradient-text">Impactan</span> el Territorio
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/projects" className="btn-primary flex items-center group mb-2">
              Ver Portafolio Completo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 h-[500px]"
            >
              {/* Project Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.imagen} 
                  alt={project.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-orange/20 border border-orange/30 text-orange text-[10px] font-black uppercase tracking-widest">
                    {project.categoria}
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-orange transition-colors">{project.titulo}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-slate-300 text-sm">
                    <Building size={14} className="mr-2 text-orange shrink-0" />
                    <span className="truncate">{project.entidad}</span>
                  </div>
                  <div className="flex items-center text-slate-300 text-sm">
                    <MapPin size={14} className="mr-2 text-orange shrink-0" />
                    <span>{project.ubicacion}</span>
                  </div>
                </div>

                <Link 
                  href={`/projects/${project.id}`}
                  className="flex items-center text-white font-bold text-sm hover:text-orange transition-colors"
                >
                  Ver ficha técnica
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;
