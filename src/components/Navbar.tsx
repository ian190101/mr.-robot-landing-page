import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-main/70 backdrop-blur-md border-b border-border-subtle py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
       {/* Logo centrado verticalmente */}
        <div className="flex flex-col items-center">
          <a href="/" className="block">
            <img
              src="https://i.ibb.co/yBQfyqVL/Airbrush-IMAGE-ENHANCER-1772539309486-1772539309486-removebg-preview-3.png"
              alt="Mr Robot Bolivia Logo"
              className="h-16 md:h-20 lg:h-20 w-auto drop-shadow-md"  // drop-shadow opcional para más estilo
            />
          </a>
          
          <a
            href="/"
           className="text-base md:text-lg lg:text-xl font-bold font-display tracking-tight text-text-main hover:text-accent transition-colors"
          >
            BOLIVIA
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/59176988638?text=Hola,%20quiero%20cotizar%20un%20proyecto%20con%20Mr.%20Robot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-text-main bg-transparent border border-accent rounded-full hover:bg-accent hover:text-bg-main transition-all duration-300"
            >
              Cotizar Proyecto
            </a>
          </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-main p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-bg-main border-b border-border-subtle p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-text-main"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 mt-4 text-sm font-medium text-bg-main bg-accent rounded-full"
          >
            Cotizar Proyecto
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
