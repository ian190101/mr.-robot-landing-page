import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="py-32 relative z-10 border-t border-border-subtle bg-bg-card/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-6 block">Nosotros</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-text-main mb-8 leading-[1.1]">
              Conoce a Mr. Robot.
            </h2>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              No somos solo programadores; somos arquitectos de soluciones. Humanizamos la tecnología para convertirla en tu ventaja competitiva.
            </p>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              Trato directo, código limpio y desarrollos que perduran. Construimos el núcleo digital que impulsa el crecimiento de tu empresa.
            </p>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-sm font-medium text-text-main uppercase tracking-widest">Ingeniería de Precisión</span>
            </div>
          </motion.div>

          {/* Right Column: Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12"
          >
            <div className="bg-bg-main border border-border-subtle rounded-2xl p-8 hover:border-accent transition-colors duration-300">
              <h3 className="text-5xl md:text-6xl font-bold font-display text-text-main mb-4">100%</h3>
              <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Código a Medida</p>
            </div>
            
            <div className="bg-bg-main border border-border-subtle rounded-2xl p-8 hover:border-accent transition-colors duration-300">
              <h3 className="text-5xl md:text-6xl font-bold font-display text-text-main mb-4">24/7</h3>
              <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Enfoque en Escalabilidad</p>
            </div>
            
            <div className="bg-bg-main border border-border-subtle rounded-2xl p-8 hover:border-accent transition-colors duration-300 sm:col-span-2 flex flex-col items-center justify-center text-center">
              <h3 className="text-6xl md:text-7xl font-bold font-display text-text-main mb-4">+100</h3>
              <p className="text-sm font-medium text-text-muted uppercase tracking-wider">Clientes Confiando en Nuestra Base</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
