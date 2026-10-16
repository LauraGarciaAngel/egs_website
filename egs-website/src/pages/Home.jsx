import { useEffect } from 'react';
import Button from '../components/ui/Button';
import BentoCard from '../components/ui/BentoCard';
import SectionHeader from '../components/ui/SectionHeader';
import TestimonialCard from '../components/ui/TestimonialCard';
import Reveal from '../components/ui/Reveal';
import VaultPreview from '../components/ui/VaultPreview';

const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const section = 'py-20 md:py-28';

const chips = ['Lineamientos AGN', 'Estándar OAIS', 'Bogotá, Colombia'];

const clients = [
  'Contraloría General de la República',
  'Empresa de Acueducto y Alcantarillado de Bogotá',
];

const stats = [
  { value: '27M+', label: 'Imágenes digitalizadas' },
  { value: '96.000+', label: 'Cajas en custodia' },
  { value: '3', label: 'Contratos con el Acueducto de Bogotá' },
  { value: '8+', label: 'Servicios especializados' },
];

const pillars = [
  {
    title: 'Alineados con el AGN',
    text: 'Organizamos, digitalizamos y describimos sus archivos bajo los lineamientos del Archivo General de la Nación.',
  },
  {
    title: 'Tecnología propia',
    text: 'Nebula Vault, nuestro software de preservación digital bajo el estándar OAIS, integrable con sus sistemas existentes.',
  },
  {
    title: 'Capacidad a gran escala',
    text: 'Más de 27 millones de imágenes digitalizadas y más de 96.000 cajas en custodia.',
  },
  {
    title: 'Servicios que pocas firmas ofrecen',
    text: 'Recuperamos información de soportes obsoletos: memorias USB, CD/DVD, cintas VHS y Betamax.',
  },
];

const steps = [
  { title: 'Diagnóstico', text: 'Evaluamos el estado de sus archivos e identificamos brechas frente a la normatividad del AGN.' },
  { title: 'Organización', text: 'Clasificamos, ordenamos e inventariamos fondos acumulados.' },
  { title: 'Digitalización', text: 'Convertimos documentos físicos en información digital con control de calidad, indexación y metadatos.' },
  { title: 'Preservación y custodia', text: 'Conservamos la información en custodia física y en Nebula Vault, con acceso 24/7.' },
];

const faqs = [
  {
    q: '¿Qué es el Programa de Gestión Documental (PGD)?',
    a: 'Es el instrumento archivístico que articula todos los procesos documentales de una entidad. Lo diseñamos e implementamos según los lineamientos del AGN.',
  },
  {
    q: '¿Qué es Nebula Vault?',
    a: 'Es nuestro software de preservación digital, desarrollado bajo el estándar OAIS. Ofrece acceso 24/7 y se integra con sistemas existentes.',
  },
  {
    q: '¿Pueden recuperar información de soportes antiguos?',
    a: 'Sí. Leemos y migramos memorias USB, CD/DVD y cintas VHS y Betamax, y digitalizamos su contenido.',
  },
  {
    q: '¿Atienden entidades públicas y privadas?',
    a: 'Sí. Trabajamos con entidades de los sectores público y privado en Colombia, desde Bogotá.',
  },
];

export default function Home() {
  useEffect(() => {
    document.title = 'EGS Soluciones Integrales | Gestión Documental Especializada en Colombia';
  }, []);

  return (
    <>
      {/* ======== HERO ======== */}
      <section className="hero-glow bg-gris-bg border-b border-line">
        <div className={`${container} pt-20 pb-20 md:pt-28 md:pb-28 grid md:grid-cols-12 gap-12 items-center`}>
          <div className="md:col-span-7">
            <ul className="flex flex-wrap gap-2 mb-8" aria-label="Enfoque">
              {chips.map((c) => (
                <li
                  key={c}
                  className="text-xs font-semibold tracking-wider uppercase text-azul-medio bg-white border border-line rounded-full px-3 py-1"
                >
                  {c}
                </li>
              ))}
            </ul>

            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-azul-profundo leading-[1.1] tracking-tight mb-6">
              Gestión documental que se puede{' '}
              <span className="text-cyan-texto">auditar, preservar y consultar</span>
            </h1>

            <p className="text-base sm:text-lg text-gris-medio leading-relaxed max-w-xl mb-10">
              Organización, digitalización, preservación digital y custodia de archivos para entidades del sector
              público y privado.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button to="/contacto" variant="primary" icon="fas fa-paper-plane">
                Solicitar cotización
              </Button>
              <Button to="/servicios" variant="outline" icon="fas fa-folder-open">
                Ver servicios
              </Button>
            </div>
          </div>

          <div className="hidden md:block md:col-span-5">
            <VaultPreview />
          </div>
        </div>
      </section>

      {/* ======== CLIENTES ======== */}
      <section aria-label="Clientes" className="bg-white border-b border-line">
        <div className={`${container} py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-12`}>
          <p className="text-xs font-semibold tracking-wider uppercase text-gris-medio shrink-0">
            Entidades que confían en EGS
          </p>
          <ul className="flex flex-wrap gap-x-10 gap-y-2 font-heading font-semibold text-azul-profundo/70">
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ======== CIFRAS ======== */}
      <section aria-label="Cifras" className={`bg-white ${section}`}>
        <div className={`${container} grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6`}>
          {stats.map((s, i) => (
            <Reveal key={s.label} index={i} className="border-l border-line pl-6">
              <div className="font-heading text-4xl md:text-5xl font-bold text-azul-profundo leading-none mb-3">
                {s.value}
              </div>
              <div className="text-sm text-gris-medio">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ======== SERVICIOS (BENTO) ======== */}
      <section className={`bg-white ${section} pt-0 md:pt-0`}>
        <div className={container}>
          <SectionHeader
            center={false}
            label="Nuestros servicios"
            title="Soluciones documentales para su organización"
            description="Organizamos, protegemos, preservamos y administramos la información de su entidad."
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <Reveal className="md:col-span-7 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-file-arrow-up"
                label="Más solicitado"
                title="Digitalización y preservación digital"
                description="Transformamos sus documentos físicos en información digital organizada, segura y accesible, sentando las bases para su preservación a largo plazo."
                to="/servicios#digitalizacion"
              >
                <ul className="mt-5 space-y-2">
                  {['Control de calidad documental', 'Indexación y metadatos descriptivos'].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gris-medio">
                      <i className="fas fa-circle-check text-cyan-texto text-xs mt-1.5" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </Reveal>

            <Reveal index={1} className="md:col-span-5 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-cloud-arrow-up"
                label="Tecnología"
                title="Nebula Vault, bodega virtual"
                description="Software OAIS de preservación digital con acceso 24/7. Tecnología propia que automatiza el ciclo de vida de la información institucional."
                to="/servicios#nebula"
              />
            </Reveal>

            <Reveal className="md:col-span-4 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-boxes-stacked"
                label="Archivística"
                title="Organización integral de archivos"
                description="Clasificación, inventarios y fondos acumulados con cumplimiento de la normativa archivística."
                to="/servicios#organizacion"
              />
            </Reveal>

            <Reveal index={1} className="md:col-span-4 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-compact-disc"
                label="Servicio de nicho"
                title="Lectura de medios magnéticos"
                description="Recuperamos información de soportes obsoletos: USB, CD/DVD, VHS y Betamax."
                to="/servicios#medios"
              />
            </Reveal>

            <Reveal index={2} className="md:col-span-4 flex">
              <BentoCard
                className="w-full"
                icon="fas fa-clipboard-list"
                label="Consultoría"
                title="Diagnóstico y PGD"
                description="Instrumentos archivísticos exigidos por la normativa del Archivo General de la Nación."
                to="/servicios"
              />
            </Reveal>
          </div>

          <div className="mt-10">
            <Button to="/servicios" variant="outline" icon="fas fa-arrow-right">
              Ver todos los servicios
            </Button>
          </div>
        </div>
      </section>

      {/* ======== POR QUÉ EGS ======== */}
      <section className={`bg-gris-bg border-y border-line ${section}`}>
        <div className={`${container} grid md:grid-cols-12 gap-12`}>
          <div className="md:col-span-4 md:sticky md:top-28 md:self-start">
            <SectionHeader
              center={false}
              label="Por qué EGS"
              title="Una sola firma para todo el ciclo del documento"
              description="Del archivo físico a la preservación digital, bajo norma y con tecnología propia."
            />
          </div>

          <ol className="md:col-span-8 divide-y divide-line border-y border-line">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} index={i} className="grid grid-cols-[3rem_1fr] gap-4 py-8">
                <span className="font-heading text-sm font-semibold text-cyan-texto pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-azul-profundo mb-2">{p.title}</h3>
                  <p className="text-sm text-gris-medio leading-relaxed max-w-xl">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ======== PROCESO ======== */}
      <section className={`bg-white ${section}`}>
        <div className={container}>
          <SectionHeader
            center={false}
            label="Cómo trabajamos"
            title="Del documento físico al archivo preservado"
          />
          <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                index={i}
                className="relative border-t border-line pt-5 before:absolute before:-top-px before:left-0 before:h-px before:w-12 before:bg-cyan-acento"
              >
                <span className="font-heading text-sm font-semibold text-cyan-texto">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-lg font-semibold text-azul-profundo mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-gris-medio leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ======== TESTIMONIOS ======== */}
      <section className={`bg-gris-bg border-y border-line ${section}`}>
        <div className={container}>
          <SectionHeader center={false} label="Lo que dicen nuestros clientes" title="Satisfacción comprobada" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal>
              <TestimonialCard
                quote="EGS demostró un alto nivel de experticia y compromiso en la organización y digitalización de nuestros fondos acumulados. Los resultados superaron nuestras expectativas tanto en calidad como en cumplimiento de los plazos establecidos."
                author="Contraloría General de la República"
                org="Entidad de control fiscal del Estado colombiano"
                initials="CG"
              />
            </Reveal>
            <Reveal index={1}>
              <TestimonialCard
                quote="La gestión de EGS en la custodia y administración de nuestros archivos ha sido ejemplar. Su capacidad para manejar grandes volúmenes de documentación con precisión y seguridad es un activo invaluable para nuestra organización."
                author="Empresa de Acueducto y Alcantarillado de Bogotá"
                org="EAAB — Empresa de servicios públicos"
                initials="AB"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <section className={`bg-white ${section}`}>
        <div className={`${container} grid md:grid-cols-12 gap-12`}>
          <div className="md:col-span-4">
            <SectionHeader center={false} label="Preguntas frecuentes" title="Lo que suelen preguntarnos" />
          </div>
          <div className="md:col-span-8 border-t border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-line py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading font-semibold text-azul-profundo focus-visible:outline-2 focus-visible:outline-cyan-acento [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="text-cyan-texto shrink-0">
                    <i className="fas fa-plus group-open:hidden" />
                    <i className="fas fa-minus hidden group-open:inline" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm text-gris-medio leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CTA FINAL ======== */}
      <section className="bg-azul-profundo text-white">
        <div className={`${container} py-20 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8`}>
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold max-w-xl mb-3">
              Cuéntenos cómo está hoy su archivo
            </h2>
            <p className="text-sm sm:text-base text-white/75 max-w-xl">
              Le proponemos una ruta de organización, digitalización y preservación ajustada a su entidad.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button to="/contacto" variant="primary" icon="fas fa-paper-plane">
              Solicitar cotización
            </Button>
            <Button href="https://wa.me/573002057325" variant="secondary" icon="fab fa-whatsapp">
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* ======== BOTÓN FLOTANTE WHATSAPP ======== */}
      <a
        href="https://wa.me/573002057325"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-all z-40"
      >
        <i className="fab fa-whatsapp" aria-hidden="true" />
      </a>
    </>
  );
}