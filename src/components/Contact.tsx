'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import * as z from 'zod';

// ── Validación con regex colombiano ──────────────────────────────────────────
const contactSchema = z.object({
  nombre: z
    .string()
    .min(3, 'El nombre es muy corto')
    .max(100, 'El nombre es muy largo')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/, 'Solo letras y espacios'),

  correo: z
    .string()
    .email('Correo inválido')
    .max(254)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato de correo inválido'),

  telefono: z
    .string()
    .regex(
      /^(\+57)?[\s-]?(3\d{2}|[1-8]\d{1})[\s-]?\d{3}[\s-]?\d{4}$/,
      'Ingrese un teléfono colombiano válido (ej: 317 667 7925)'
    ),

  mensaje: z.string().min(10, 'El mensaje es muy corto').max(1000),
  proyecto: z.string().optional(),

  // Ley 1581 — consentimiento explícito obligatorio
  consentimiento: z.literal(true, {
    errorMap: () => ({ message: 'Debe aceptar el tratamiento de datos para continuar' }),
  }),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setServerError('');
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, origen: 'Formulario Contacto' }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else if (response.status === 429) {
        setServerError('Demasiadas solicitudes. Intente en un minuto.');
      } else {
        setServerError('Error al enviar. Intente nuevamente.');
      }
    } catch {
      setServerError('Error de conexión. Intente nuevamente.');
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Teléfono',
      value: '317 667 7925',
      href: 'tel:3176677925',
    },
    {
      icon: <Mail size={24} />,
      title: 'Correo Electrónico',
      value: 'gggsas2017@gmail.com',
      href: 'mailto:gggsas2017@gmail.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Ubicación',
      value: 'Carrera 56 #153-84, Bogotá D.C.',
      href: 'https://maps.google.com/?q=Carrera+56+153-84+Bogota',
    },
  ];

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange font-bold uppercase tracking-widest text-sm mb-4 block">
              Hablemos de su proyecto
            </span>
            <h2 id="contacto-titulo" className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Construyamos el <span className="gradient-text">Futuro</span> Juntos
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              Estamos listos para aportar nuestra capacidad técnica y experiencia en su próximo desafío
              de ingeniería. Solicite una cotización o asesoría sin compromiso.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} className="flex items-start space-x-6 group">
                  <div
                    className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100"
                    aria-hidden="true"
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{info.title}</p>
                    <p className="text-xl font-bold text-slate-800">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 p-8 bg-slate-900 rounded-3xl text-white">
              <p className="text-sm font-bold uppercase tracking-widest text-orange mb-2">Datos Legales</p>
              <div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-400">
                <div>
                  <p className="text-white mb-1">Razón Social</p>
                  <p>3G INGENIERÍA AVANZADA S.A.S.</p>
                </div>
                <div>
                  <p className="text-white mb-1">NIT</p>
                  <p>901116527-7</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 relative"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div
                  className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                  aria-hidden="true"
                >
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">¡Mensaje Enviado!</h3>
                <p className="text-slate-500 max-w-xs mx-auto">
                  Hemos recibido su solicitud. Un ingeniero de nuestro equipo lo contactará en menos de 24 horas.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-orange font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-orange rounded"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate aria-label="Formulario de contacto">
                {serverError && (
                  <div role="alert" className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-bold">
                    {serverError}
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                    Nombre Completo <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="nombre"
                    {...register('nombre')}
                    aria-required="true"
                    aria-describedby={errors.nombre ? 'nombre-error' : undefined}
                    aria-invalid={!!errors.nombre}
                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.nombre ? 'border-red-500' : 'border-slate-100'} focus:bg-white focus:ring-4 focus:ring-orange/5 outline-none transition-all`}
                    placeholder="Ej: Sandra Galvis"
                  />
                  {errors.nombre && (
                    <p id="nombre-error" role="alert" className="text-[10px] text-red-500 font-bold ml-2">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="correo" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                      Correo <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="correo"
                      type="email"
                      {...register('correo')}
                      aria-required="true"
                      aria-describedby={errors.correo ? 'correo-error' : undefined}
                      aria-invalid={!!errors.correo}
                      className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.correo ? 'border-red-500' : 'border-slate-100'} focus:bg-white focus:ring-4 focus:ring-orange/5 outline-none transition-all`}
                      placeholder="correo@ejemplo.com"
                    />
                    {errors.correo && (
                      <p id="correo-error" role="alert" className="text-[10px] text-red-500 font-bold ml-2">
                        {errors.correo.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                      Teléfono <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      {...register('telefono')}
                      aria-required="true"
                      aria-describedby={errors.telefono ? 'telefono-error' : undefined}
                      aria-invalid={!!errors.telefono}
                      className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.telefono ? 'border-red-500' : 'border-slate-100'} focus:bg-white focus:ring-4 focus:ring-orange/5 outline-none transition-all`}
                      placeholder="317 667 7925"
                    />
                    {errors.telefono && (
                      <p id="telefono-error" role="alert" className="text-[10px] text-red-500 font-bold ml-2">
                        {errors.telefono.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="proyecto" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                    Proyecto de Interés
                  </label>
                  <select
                    id="proyecto"
                    {...register('proyecto')}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-orange/5 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Seleccione una categoría</option>
                    <option value="Infraestructura Vial">Infraestructura Vial</option>
                    <option value="Edificaciones">Edificaciones</option>
                    <option value="Saneamiento Básico">Saneamiento Básico</option>
                    <option value="Riego / Agrícola">Riego / Agrícola</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">
                    Mensaje o Requerimiento <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    {...register('mensaje')}
                    rows={4}
                    aria-required="true"
                    aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
                    aria-invalid={!!errors.mensaje}
                    className={`w-full px-5 py-4 rounded-2xl bg-slate-50 border ${errors.mensaje ? 'border-red-500' : 'border-slate-100'} focus:bg-white focus:ring-4 focus:ring-orange/5 outline-none transition-all resize-none`}
                    placeholder="Cuéntenos sobre su necesidad técnica..."
                  />
                  {errors.mensaje && (
                    <p id="mensaje-error" role="alert" className="text-[10px] text-red-500 font-bold ml-2">
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                {/* ── Consentimiento Ley 1581 ── */}
                <div className="space-y-1">
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      {...register('consentimiento')}
                      aria-required="true"
                      aria-describedby={errors.consentimiento ? 'consent-error' : undefined}
                      aria-invalid={!!errors.consentimiento}
                      className="mt-1 w-4 h-4 accent-orange shrink-0 focus:ring-2 focus:ring-orange rounded"
                    />
                    <span className="text-xs text-slate-500 font-medium leading-relaxed">
                      Autorizo a{' '}
                      <strong className="text-slate-700">3G Ingeniería Avanzada S.A.S.</strong> para
                      recolectar y tratar mis datos personales con fines comerciales, conforme a la{' '}
                      <Link href="/privacy-policy" className="text-orange underline hover:text-orange/80 focus:outline-none focus:ring-1 focus:ring-orange rounded" target="_blank">
                        Política de Tratamiento de Datos
                      </Link>{' '}
                      y la Ley 1581 de 2012.{' '}
                      <span aria-hidden="true" className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.consentimiento && (
                    <p id="consent-error" role="alert" className="text-[10px] text-red-500 font-bold ml-7">
                      {errors.consentimiento.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="btn-primary w-full py-5 text-lg flex items-center justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Iniciar Consulta Técnica'}
                  <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-orange/5 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none" aria-hidden="true" />
    </section>
  );
};

export default Contact;
