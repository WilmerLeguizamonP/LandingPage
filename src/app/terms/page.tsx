import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsAndConditions() {
  return (
    <main className="bg-white">
      <Navbar />
      <section className="pt-40 pb-20 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-black text-slate-900 mb-10">Términos y Condiciones</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p className="font-bold">Vigente desde: 11 de mayo de 2026</p>
          
          <p>
            Bienvenido al portal institucional de <strong>3G INGENIERÍA AVANZADA S.A.S.</strong> Al acceder y utilizar este sitio web, usted acepta cumplir con los siguientes términos y condiciones de uso.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Objeto</h2>
          <p>
            Este sitio web tiene como objetivo informar sobre los servicios, trayectoria y proyectos ejecutados por 3G INGENIERÍA AVANZADA S.A.S. en los sectores de ingeniería civil, arquitectura y construcción.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Veracidad de la Información</h2>
          <p>
            Toda la información institucional y técnica presentada en este portal es real y verificable. Los proyectos listados corresponden a obras ejecutadas o en ejecución por la empresa con las entidades mencionadas.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Propiedad Intelectual</h2>
          <p>
            El contenido, diseño, logotipos y material visual de este sitio son propiedad exclusiva de 3G INGENIERÍA AVANZADA S.A.S. Queda prohibida su reproducción total o parcial sin autorización expresa.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Limitación de Responsabilidad</h2>
          <p>
            3G INGENIERÍA AVANZADA S.A.S. no se hace responsable por el uso indebido de la información aquí presentada por parte de terceros. Las cotizaciones o presupuestos finales solo se formalizarán mediante contrato escrito.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">5. Ley Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta ante los tribunales competentes de la ciudad de Bogotá D.C.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
