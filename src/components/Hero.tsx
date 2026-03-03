import { motion } from 'motion/react';
import { ArrowRight, Settings } from 'lucide-react';

export default function Hero() {
  const tickerItems = [
    "PYTHON", "FASTAPI", "FLASK", "DJANGO", "REACT",  "Tailwind CSS", "PHP", "LARAVEL", "FLUTTER", "C#", "NODEJS", "Arquitecturas Modulares"

  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-bg-card/50 backdrop-blur-sm mb-8"
        >
          <Settings size={16} className="text-accent" />
          <span className="text-sm font-medium text-text-muted">Ingeniería de Software & Diseño</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-text-main max-w-5xl leading-[1.1] mb-8"
        >
          El motor tecnológico que tu negocio necesita.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mb-12"
        >
          Desarrollamos soluciones informáticas a medida, desde sistemas web hasta aplicaciones móviles. Automatizamos tus procesos para que tú te enfoques en crecer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-bg-main bg-text-main rounded-full hover:bg-accent transition-colors w-full sm:w-auto"
          >
            Iniciar un proyecto
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-text-main bg-transparent border border-accent rounded-full hover:bg-bg-card transition-colors w-full sm:w-auto"
          >
            Ver nuestros servicios
          </a>
        </motion.div>
      </div>

     {/* Marquee Ticker */}
<div className="absolute bottom-0 left-0 right-0 border-y border-border-subtle bg-bg-main/80 backdrop-blur-md py-4 overflow-hidden z-20">
  <div className="flex animate-marquee whitespace-nowrap will-change-transform">
    {/* Primera copia completa de los items */}
    {tickerItems.map((item, index) => (
      <div 
        key={`first-${index}`} 
        className="flex items-center whitespace-nowrap px-10 md:px-12"
      >
        <span className="text-sm font-medium text-text-muted uppercase tracking-widest">
          {item}
        </span>
        <span className="mx-8 md:mx-10 text-border-subtle">•</span>
      </div>
    ))}

    {/* Puente invisible para disimular el join */}
    <div className="w-[100vw] shrink-0" />   {/* o w-[50vw] si es muy ancho */}   

    {/* Segunda copia idéntica (esto es clave para el loop seamless) */}
    {tickerItems.map((item, index) => (
      <div 
        key={`second-${index}`} 
        className="flex items-center whitespace-nowrap px-10 md:px-12"
      >
        <span className="text-sm font-medium text-text-muted uppercase tracking-widest">
          {item}
        </span>
        <span className="mx-8 md:mx-10 text-border-subtle">•</span>
      </div>
    ))}
  </div>
</div>
</section>   
);
}
