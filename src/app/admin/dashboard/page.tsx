import { prisma } from '@/lib/prisma';
import { Shield, Users, Mail, Phone, Calendar, CheckCircle, Clock, Trash2, Download } from 'lucide-react';
import Link from 'next/link';

import ExportButton from '@/components/admin/ExportButton';

export const dynamic = 'force-dynamic';

async function getLeads() {
  return await prisma.lead.findMany({
    orderBy: { fecha: 'desc' },
  });
}

export default async function AdminDashboard() {
  const leads = await getLeads();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-white p-8 hidden lg:flex flex-col">
        <div className="mb-12">
          <div className="text-2xl font-black mb-1">3G <span className="text-orange">ADMIN</span></div>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Panel de Control</p>
        </div>

        <nav className="flex-grow space-y-2">
          <Link href="/admin/dashboard" className="flex items-center space-x-4 bg-orange text-white p-4 rounded-2xl font-bold">
            <Users size={20} />
            <span>Prospectos / Leads</span>
          </Link>
          <Link href="/admin/projects" className="flex items-center space-x-4 text-slate-400 hover:bg-white/5 p-4 rounded-2xl font-bold transition-all">
            <Shield size={20} />
            <span>Proyectos</span>
          </Link>
        </nav>

        <div className="pt-8 border-t border-slate-800">
          <Link href="/" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
            Cerrar Sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Gestión de Prospectos</h1>
            <p className="text-slate-500 font-medium">Visualización de leads capturados en tiempo real.</p>
          </div>
          <div className="flex space-x-4">
             <ExportButton data={leads} />
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                 <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center text-orange">
                    <Users size={24} />
                 </div>
                 <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">+12% hoy</span>
              </div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Total Leads</p>
              <p className="text-3xl font-black text-slate-900">{leads.length}</p>
           </div>
           {/* Add more stats as needed */}
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Fecha</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Contacto</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Empresa/Tipo</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Origen</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Estado</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900">{new Date(lead.fecha).toLocaleDateString()}</span>
                        <span className="text-[10px] text-slate-400 font-medium flex items-center mt-1">
                          <Clock size={10} className="mr-1" /> {new Date(lead.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-900">{lead.nombre}</span>
                        <span className="text-xs text-slate-500 flex items-center mt-1">
                          <Mail size={12} className="mr-2 text-slate-300" /> {lead.correo}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center mt-1">
                          <Phone size={12} className="mr-2 text-slate-300" /> {lead.telefono}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-700">{lead.empresa || 'N/A'}</span>
                        <span className="text-[10px] font-black uppercase text-orange/80 mt-1">{lead.tipo}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                        {lead.origen}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                        lead.estado === 'Nuevo' ? 'bg-orange/10 text-orange' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {lead.estado}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex space-x-2">
                        <button className="p-2 text-slate-400 hover:text-green-600 transition-colors">
                          <CheckCircle size={18} />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-8 py-20 text-center text-slate-400 italic">
                      No hay prospectos registrados aún.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
