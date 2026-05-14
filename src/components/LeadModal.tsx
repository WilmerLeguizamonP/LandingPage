'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, Building2, UserCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import * as z from 'zod';

const leadSchema = z.object({
  nombre: z
    .string()
    .min(3, 'Nombre muy corto')
    .max(100)
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, 'Solo letras y espacios'),

  correo: z
    .string()
    .email('Correo inválido')
    .max(254)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato inválido'),

  telefono: z
    .string()
    .regex(
      /^(\+57)?[\s-]?(3\d{2}|[1-8]\d{1})[\s-]?\d{3}[\s-]?\d{4}$/,
      'Teléfono colombiano inválido'
    ),

  empresa: z.string().max(150).optional(),
  tipo: z.enum(['Empresa', 'Persona independiente']),

  // Ley 1581
  consentimiento: z.literal(true, { error: 'Debe aceptar el tratamiento de datos' }),
});

type LeadForm = z.infer<typeof leadSchema>;

const LeadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('3g_lead_modal_v4');
    const isForced = typeof window !== 'undefined' && window.location.hash === '#modal';

    if (!hasSeenModal || isForced) {
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LeadForm>({
    resolver: zodResolver(leadSchema),
    defaultValues: { tipo: 'Empresa' },
  });

  const onSubmit = async (data: LeadForm) => {
    const { consentimiento: _c, ...payload } = data;
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, origen: 'Modal Automático' }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        sessionStorage.setItem('3g_lead_modal_v4', 'true');
        setTimeout(() => setIsOpen(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem('3g_lead_modal_v4', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-orange rounded"
              aria-label="Cerrar modal"
            >
              <X size={24} aria-hidden="true" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Sidebar decorativo */}
              <div className="hidden md:flex md:col-span-2 bg-linear-to-br from-slate-900 to-slate-800 p-8 flex-col justify-between text-white" aria-hidden="true">
                <div>
                  <div className="text-2xl font-black mb-2">3G <span className="text-orange">INGENIERÍA</span></div>
                  <p className="text-slate-400 text-sm font-medium">Liderazgo en construcción sostenible.</p>
                </div>
                <div className="space-y-6">
                  {['Consultoría Pro', 'Impacto Nacional'].map((item) => (
                    <div key={item} className="flex items-center space-x-3 text-sm">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <CheckIcon />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulario */}
              <div className="md:col-span-3 p-8">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-10" role="status">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2" aria-hidden="true">
                      <Send size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">¡Recibido!</h3>
                    <p className="text-slate-500">Un asesor técnico se pondrá en contacto pronto.</p>
                  </div>
                ) : (
                  <>
                    <h3 id="modal-title" className="text-2xl font-black text-slate-900 mb-2">¿Buscas excelencia?</h3>
                    <p className="text-slate-500 text-sm mb-6 font-medium">
                      Déjanos tus datos para una asesoría técnica especializada.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                      {/* Nombre */}
                      <div className="space-y-1">
                        <label htmlFor="m-nombre" className="sr-only">Nombre completo</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 text-slate-400" size={18} aria-hidden="true" />
                          <input
                            id="m-nombre"
                            {...register('nombre')}
                            placeholder="Nombre completo *"
                            aria-required="true"
                            aria-invalid={!!errors.nombre}
                            className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${errors.nombre ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-orange/20 outline-none text-sm transition-all`}
                          />
                        </div>
                        {errors.nombre && <p role="alert" className="text-[10px] text-red-500 font-bold ml-2">{errors.nombre.message}</p>}
                      </div>

                      {/* Correo y Teléfono */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="m-correo" className="sr-only">Correo electrónico</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 text-slate-400" size={18} aria-hidden="true" />
                            <input
                              id="m-correo"
                              type="email"
                              {...register('correo')}
                              placeholder="Correo *"
                              aria-required="true"
                              aria-invalid={!!errors.correo}
                              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${errors.correo ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-orange/20 outline-none text-sm transition-all`}
                            />
                          </div>
                          {errors.correo && <p role="alert" className="text-[10px] text-red-500 font-bold ml-2">{errors.correo.message}</p>}
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="m-telefono" className="sr-only">Teléfono</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 text-slate-400" size={18} aria-hidden="true" />
                            <input
                              id="m-telefono"
                              type="tel"
                              {...register('telefono')}
                              placeholder="Teléfono *"
                              aria-required="true"
                              aria-invalid={!!errors.telefono}
                              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${errors.telefono ? 'border-red-500' : 'border-slate-200'} focus:ring-2 focus:ring-orange/20 outline-none text-sm transition-all`}
                            />
                          </div>
                          {errors.telefono && <p role="alert" className="text-[10px] text-red-500 font-bold ml-2">{errors.telefono.message}</p>}
                        </div>
                      </div>

                      {/* Empresa */}
                      <div>
                        <label htmlFor="m-empresa" className="sr-only">Empresa (opcional)</label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-3 text-slate-400" size={18} aria-hidden="true" />
                          <input
                            id="m-empresa"
                            {...register('empresa')}
                            placeholder="Empresa (opcional)"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange/20 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>

                      {/* Tipo */}
                      <fieldset>
                        <legend className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                          Tipo de Cliente
                        </legend>
                        <div className="grid grid-cols-2 gap-3">
                          {(['Empresa', 'Persona independiente'] as const).map((val) => (
                            <label key={val} className="relative cursor-pointer">
                              <input {...register('tipo')} type="radio" value={val} className="peer sr-only" />
                              <div className="flex items-center justify-center p-3 rounded-xl border border-slate-200 peer-checked:border-orange peer-checked:bg-orange/5 peer-checked:text-orange transition-all text-sm font-bold text-slate-600">
                                {val === 'Empresa'
                                  ? <><Building2 size={16} className="mr-2" aria-hidden="true" />Empresa</>
                                  : <><UserCircle size={16} className="mr-2" aria-hidden="true" />Independiente</>
                                }
                              </div>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      {/* Consentimiento Ley 1581 */}
                      <div className="space-y-1">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            onChange={(e) => setValue('consentimiento', e.target.checked as true)}
                            aria-required="true"
                            aria-invalid={!!errors.consentimiento}
                            className="mt-0.5 w-4 h-4 accent-orange shrink-0 focus:ring-2 focus:ring-orange rounded"
                          />
                          <span className="text-[11px] text-slate-500 leading-relaxed">
                            Autorizo el tratamiento de mis datos conforme a la{' '}
                            <Link
                              href="/privacy-policy"
                              target="_blank"
                              className="text-orange underline hover:text-orange/80 focus:outline-none focus:ring-1 focus:ring-orange rounded"
                            >
                              Política de Datos
                            </Link>{' '}
                            y la Ley 1581 de 2012.{' '}
                            <span aria-hidden="true" className="text-red-500">*</span>
                          </span>
                        </label>
                        {errors.consentimiento && (
                          <p role="alert" className="text-[10px] text-red-500 font-bold ml-7">
                            {errors.consentimiento.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        className="btn-primary w-full py-3.5 flex items-center justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Enviando...' : 'Solicitar Información'}
                        <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const CheckIcon = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-orange" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default LeadModal;