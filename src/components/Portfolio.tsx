import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Sistema de Gestión de información para Centro de Estimulación infantil",
    category: "Sistemas Web",
    image: "https://i.ibb.co/QFJ0SKzN/Dashboard-Datilera.png",
    delay: 0.1
  },
  {
    title: "App Móvil de Control de Finanzas",
    category: "Aplicaciones Móviles",
    image: "https://i.ibb.co/7dczfFkv/Control-Finanzasjpeg.jpg",
    delay: 0.2
  }
];

export default function Portfolio() {
  return (
    <section id="proyectos" className="py-32 relative z-10 border-t border-border-subtle bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >

        

          <span className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4 block">Portafolio</span>
          </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-display tracking-tight text-text-main mb-6"
            >
              Nuestra Ingeniería en Acción.
             </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-muted"
            >  
              Explora algunos de nuestros desarrollos más recientes y cómo ayudamos a escalar negocios.
            </motion.p>
          

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: project.delay, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden border border-border-subtle aspect-[4/3] cursor-pointer"
            >
              {/* Image with grayscale by default, color on hover */}
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-bg-main/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium text-accent uppercase tracking-wider mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-text-main mb-4">
                  {project.title}
                </h3>
                <div className="inline-flex items-center text-sm font-medium text-text-main opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  Ver Proyecto <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
         
        </div>
      </div>
    </section>
  );
}
