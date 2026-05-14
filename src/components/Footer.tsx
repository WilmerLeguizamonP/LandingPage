import Link from 'next/link';
import { Phone, Mail, MapPin, Shield, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    empresa: [
      { name: 'Nosotros', href: '#nosotros' },
      { name: 'Servicios', href: '#servicios' },
      { name: 'Portafolio', href: '/projects' },
      { name: 'Contacto', href: '#contacto' },
    ],
    legal: [
      { name: 'Política de Privacidad', href: '/privacy-policy' },
      { name: 'Términos y Condiciones', href: '/terms' },
      { name: 'Ética y Transparencia', href: '/ethics' },
      { name: 'SST', href: '#nosotros' },
    ],
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-3xl font-black tracking-tighter">
                3G <span className="text-orange">INGENIERÍA</span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Avanzada S.A.S.
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Liderando la innovación y sostenibilidad en el sector de la construcción en Colombia. Soluciones de ingeniería con impacto real.
            </p>
            <div className="flex items-center space-x-2 text-xs font-bold text-orange uppercase tracking-widest">
              <Shield size={14} />
              <span>NIT: 901116527-7</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center">
              <span className="w-8 h-px bg-orange mr-3" />
              Empresa
            </h4>
            <ul className="space-y-4">
              {links.empresa.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-orange transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center">
              <span className="w-8 h-px bg-orange mr-3" />
              Legal
            </h4>
            <ul className="space-y-4">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-orange transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center">
              <span className="w-8 h-px bg-orange mr-3" />
              Contacto Directo
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Phone size={18} className="text-orange shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-slate-200 font-bold">Llámanos</p>
                  <p className="text-slate-400">317 667 7925</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Mail size={18} className="text-orange shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-slate-200 font-bold">Escríbenos</p>
                  <p className="text-slate-400">gggsas2017@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin size={18} className="text-orange shrink-0 mt-1" />
                <div className="text-sm">
                  <p className="text-slate-200 font-bold">Oficina Bogotá</p>
                  <p className="text-slate-400 leading-tight">
                    Carrera 56 #153-84, Torre 4, Parque Central Colina
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} 3G INGENIERÍA AVANZADA S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
             <div className="flex flex-col items-end text-[10px] text-slate-500 font-medium">
               <span>Representante Legal:</span>
               <span className="text-slate-300">Sandra Milena Galvis</span>
             </div>
             <div className="w-px h-6 bg-slate-900" />
             <div className="flex flex-col items-end text-[10px] text-slate-500 font-medium">
               <span>Código CIIU:</span>
               <span className="text-slate-300">7112</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
