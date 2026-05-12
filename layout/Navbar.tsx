'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Bartley Green', href: '/bartley-green' },
  { name: 'Booking Policy', href: '/booking-policy' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarBg = isScrolled 
    ? 'bg-matte-black/80 backdrop-blur-md border-b border-white/5 py-4' 
    : 'bg-transparent py-6';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex flex-col z-50 group">
            <span className="font-serif text-2xl uppercase tracking-[0.15em] font-medium leading-none">
              Beard <span className="text-amber italic">&amp;</span> Bone
            </span>
            <span className="font-sans text-[0.6rem] uppercase tracking-[0.3em] mt-1 text-bone/60 group-hover:text-bone transition-colors">
              Barbers
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className={`text-[0.75rem] uppercase tracking-[0.1em] font-medium transition-colors hover:text-amber relative ${
                  pathname === link.href ? 'text-amber' : 'text-bone/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link 
              href="/book"
              className="inline-block border border-amber/30 bg-transparent text-bone px-6 py-3 text-[0.75rem] uppercase tracking-[0.15em] font-semibold hover:bg-amber hover:text-matte-black transition-all duration-300 rounded-full"
            >
              Book Now
            </Link>
          </div>

          <button 
            className="lg:hidden z-50 text-bone p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-matte-black/95 backdrop-blur-xl flex flex-col justify-center items-center p-6 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-serif uppercase tracking-[0.1em] transition-colors relative ${
                    pathname === link.href ? 'text-amber' : 'text-bone/80'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10 w-full flex justify-center">
                <Link 
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block border border-amber bg-amber/10 text-amber px-8 py-4 text-[0.8rem] uppercase tracking-[0.15em] font-semibold hover:bg-amber hover:text-matte-black transition-all duration-300 rounded-full w-full text-center"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
