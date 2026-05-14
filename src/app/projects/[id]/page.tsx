'use client';

import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';
import { MapPin, Building, Calendar, ClipboardCheck, ArrowLeft, Shield } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Proyecto no encontrado</h1>
          <Link href="/projects" className="text-orange font-bold hover:underline">Volver al portafolio</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} className="mr-2" />
            Volver al Portafolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="px-4 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                {project.categoria}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                {project.titulo}
              </h1>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center text-slate-300">
                  <MapPin size={20} className="mr-2 text-orange" />
                  <span className="font-bold">{project.ubicacion}</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <ClipboardCheck size={20} className="mr-2 text-orange" />
                  <span className="font-bold uppercase tracking-widest text-sm">{project.estado}</span>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
               <div className="inline-block p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl text-left">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Entidad Contratante</p>
                  <div className="flex items-center text-white">
                    <Building size={24} className="mr-3 text-orange" />
                    <span className="text-xl font-black">{project.entidad}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid-overlay opacity-10" />
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center">
                <span className="w-10 h-1 bg-orange mr-4 rounded-full" />
                Descripción Técnica
              </h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                <p className="mb-8 text-xl font-medium text-slate-700">
                  {project.descripcion}
                </p>
                <p>
                  Este proyecto representa el compromiso de 3G INGENIERÍA AVANZADA S.A.S. con la calidad y la eficiencia técnica. La ejecución se realizó siguiendo estrictos protocolos de ingeniería, asegurando el cumplimiento de los cronogramas y las especificaciones técnicas requeridas por la entidad contratante.
                </p>
                <div className="my-12 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                  <h3 className="text-xl font-black text-slate-900 mb-6">Especificaciones de Obra</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange mr-4 shrink-0">
                        <Shield size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-1">Garantía Técnica</p>
                        <p className="text-xs text-slate-500">Cumplimiento de NSR-10 y normatividad vigente.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-orange mr-4 shrink-0">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 mb-1">Gestión de Tiempos</p>
                        <p className="text-xs text-slate-500">Control estricto de ruta crítica.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-slate-900/20">
                  <h3 className="text-2xl font-black mb-6">¿Interesado en una solución similar?</h3>
                  <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                    Nuestra experiencia en <span className="text-white font-bold">{project.categoria}</span> nos permite ofrecer asesoría técnica de primer nivel para su próximo requerimiento.
                  </p>
                  <Link href="#contacto" className="btn-primary w-full flex justify-center py-4">
                    Solicitar Consulta
                  </Link>
                </div>

                <div className="p-8 rounded-[2rem] border border-slate-100 bg-white">
                   <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">Información Corporativa</h4>
                   <div className="space-y-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Razón Social</span>
                        <span className="text-sm font-bold text-slate-700">3G INGENIERÍA AVANZADA S.A.S.</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">NIT</span>
                        <span className="text-sm font-bold text-slate-700">901116527-7</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Representante</span>
                        <span className="text-sm font-bold text-slate-700">Sandra Milena Galvis</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
