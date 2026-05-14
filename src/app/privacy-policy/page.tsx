import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="bg-white">
      <Navbar />
      <section className="pt-40 pb-20 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-black text-slate-900 mb-10">Política de Privacidad</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="font-bold">Última actualización: 11 de mayo de 2026</p>
          
          <p>
            En <strong>3G INGENIERÍA AVANZADA S.A.S.</strong>, con NIT 901116527-7 y domicilio en Bogotá D.C., nos comprometemos a proteger la privacidad y los datos personales de nuestros usuarios y clientes, de acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Recolección de Datos</h2>
          <p>
            Recolectamos información personal a través de nuestros formularios de contacto y modal de prospección. Los datos recolectados incluyen: nombre, correo electrónico, teléfono, empresa y tipo de cliente.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Finalidad del Tratamiento</h2>
          <p>
            Los datos recolectados serán utilizados para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Establecer contacto comercial y técnico.</li>
            <li>Enviar información sobre nuestros proyectos y servicios.</li>
            <li>Realizar gestiones administrativas y de auditoría interna.</li>
            <li>Cumplir con requerimientos legales de entidades estatales.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Derechos del Titular</h2>
          <p>
            Usted tiene derecho a conocer, actualizar, rectificar y suprimir sus datos personales. Para ejercer estos derechos, puede escribirnos al correo: <strong>gggsas2017@gmail.com</strong>.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Seguridad</h2>
          <p>
            Implementamos medidas técnicas y administrativas de seguridad para evitar el acceso no autorizado, pérdida o alteración de la información depositada en nuestra plataforma.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
