import { motion } from 'motion/react';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    icon: <Code size={32} className="text-accent mb-6" />,
    title: "Sistemas Web y Locales",
    description: "Plataformas a medida para gestión de información, reportes financieros y nóminas. Escalabilidad garantizada.",
    cta: "Cotizar Sistema",
    href: "https://wa.me/59176988638?text=Hola,%20quiero%20cotizar%20un%20sistema%20web/local.",
    delay: 0.1
  },
  {
    icon: <Smartphone size={32} className="text-accent mb-6" />,
    title: "Aplicaciones Móviles",
    description: "Llevamos tu modelo de negocio directamente al bolsillo de tus usuarios con apps de alto rendimiento.",
    cta: "Cotizar App",
    href: "https://wa.me/59176988638?text=Hola,%20quiero%20cotizar%20el%20desarrollo%20de%20una%20app.",
    delay: 0.2
  },
  {
    icon: <Globe size={32} className="text-accent mb-6" />,
    title: "Sitios Web & Landings",
    description: "Diseñamos páginas rápidas, orientadas a la conversión y visualmente impactantes.",
    cta: "Cotizar Web",
    href: "https://wa.me/59176988638?text=Hola,%20quiero%20cotizar%20una%20p%C3%A1gina%20web/landing.",
    delay: 0.3
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-32 relative z-10 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-subtle bg-bg-card/50 mb-6"
            >
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Soluciones Informáticas</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-display tracking-tight text-text-main mb-6"
            >
              Arquitectura digital para cada escala.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-muted"
            >
              Construimos sistemas robustos con arquitecturas modulares y subdominios escalables.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative bg-bg-card/40 backdrop-blur-sm border border-border-subtle rounded-2xl p-8 hover:border-accent transition-all duration-300 flex flex-col h-full"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10 flex-1">
                {service.icon}
                <h3 className="text-2xl font-bold font-display text-text-main mb-4">{service.title}</h3>
                <p className="text-text-muted leading-relaxed mb-8">{service.description}</p>
              </div>
              
              <div className="relative z-10 mt-auto pt-6 border-t border-border-subtle/50">
                <a 
                  href={service.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-sm font-medium text-text-main group-hover:text-accent transition-colors"
                >
                  {service.cta}
                  <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}