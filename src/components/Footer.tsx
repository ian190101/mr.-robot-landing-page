import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle bg-bg-main pt-32 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Contenido Principal Centrado */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter text-text-main max-w-5xl leading-[1.1] mb-12"
          >
            ¿Listo para ensamblar el engranaje que te falta?
          </motion.h1>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            href="https://wa.me/59176988638?text=Hola,%20quiero%20hablar%20con%20un%20desarrollador%20de%20software"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-bg-main bg-text-main rounded-full hover:bg-accent transition-all duration-300 hover:scale-105"
          >
            Hablar con un Arquitecto de Software
            <ArrowUpRight size={24} className="ml-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div> {/* <-- AQUÍ ESTÁ EL DIV QUE FALTABA CERRAR */}

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border-subtle/50">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-xl font-bold font-display tracking-tighter text-text-main">MR. ROBOT</span>
          </div>
          <div className="text-sm font-medium text-text-muted flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span>Diseñado y Desarrollado por Mr. Robot Bolivia</span>
            <span className="hidden md:inline text-border-subtle">|</span>
            <span>&copy; 2026 Todos los derechos reservados</span>
          </div>
        </div>

      </div>
    </footer>
  );
}