import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Rooms', href: '#rooms' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Access', href: '#access' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className={`flex items-center gap-3 font-serif text-2xl tracking-widest transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
          <Logo className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-accent' : 'text-white'}`} />
          HOTEL USAGI
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest transition-colors duration-300 ${
                isScrolled ? 'text-primary hover:text-accent' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.booking.com/hotel/jp/hoteru-usagi.ja.html"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2 border transition-colors duration-300 text-sm tracking-widest ${
              isScrolled 
                ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-primary'
            }`}
          >
            RESERVE
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg tracking-widest text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://www.booking.com/hotel/jp/hoteru-usagi.ja.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center px-6 py-3 bg-primary text-white text-sm tracking-widest mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              RESERVE
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
