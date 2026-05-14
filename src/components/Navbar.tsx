'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'
              }`}>
                3G <span className="text-orange">INGENIERÍA</span>
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${
                isScrolled ? 'text-slate-500' : 'text-slate-500 lg:text-white/80'
              }`}>
                Avanzada S.A.S.
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm transition-colors hover:text-orange ${
                  isScrolled ? 'text-slate-700' : 'text-slate-700 lg:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="btn-primary py-2 px-5 text-sm"
            >
              Presupuesto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-bold text-slate-800 hover:bg-slate-50 hover:text-orange"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3 flex flex-col space-y-4">
                <div className="flex items-center text-slate-600 text-sm">
                  <Phone size={16} className="mr-2 text-orange" />
                  317 667 7925
                </div>
                <div className="flex items-center text-slate-600 text-sm">
                  <Mail size={16} className="mr-2 text-orange" />
                  gggsas2017@gmail.com
                </div>
                <Link
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-center"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
