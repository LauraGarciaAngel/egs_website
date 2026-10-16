import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    document.title = 'Proyectos | EGS';
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-azul-profundo">Proyectos</h1>
    </section>
  );
}