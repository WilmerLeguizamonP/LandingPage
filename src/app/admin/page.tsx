'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.push('/admin/dashboard');
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error ?? 'Credenciales inválidas. Acceso denegado.');
      }
    } catch {
      setError('Error de conexión. Intente nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 p-10 border border-slate-100"
      >
        <div className="text-center mb-10">
          <div
            className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            aria-hidden="true"
          >
            <Shield className="text-orange" size={40} />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Panel Administrativo</h1>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Acceso Restringido</p>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl flex items-center text-sm font-bold"
          >
            <AlertCircle size={18} className="mr-3 shrink-0" aria-hidden="true" />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6" noValidate>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1"
            >
              Correo Electrónico
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-400" size={20} aria-hidden="true" />
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-orange/5 outline-none transition-all font-medium"
                placeholder="admin@3gingenieria.com"
                aria-required="true"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1"
            >
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-400" size={20} aria-hidden="true" />
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-orange/5 outline-none transition-all font-medium"
                placeholder="••••••••"
                aria-required="true"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-5 text-lg flex items-center justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
            aria-busy={loading}
          >
            {loading ? 'Validando...' : 'Ingresar al Sistema'}
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            3G INGENIERÍA AVANZADA S.A.S. • SISTEMA DE AUDITORÍA
          </p>
        </div>
      </motion.div>
    </main>
  );
}
