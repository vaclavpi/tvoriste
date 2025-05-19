import React, { useState, useEffect } from 'react';
import { Menu, Hexagon } from 'lucide-react';
import { navLinks } from '../../constants';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-dark-200 shadow-lg py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a 
            href="/" 
            className={`flex items-center space-x-2 text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
          >
            <Hexagon className="w-8 h-8 text-[#1daab1]" />
            <span>Tvořiště s.r.o.</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className={`font-medium transition-colors duration-300 ${
                      isScrolled 
                        ? 'text-gray-300 hover:text-[#1daab1]' 
                        : 'text-white hover:text-[#8fd3d2]'
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className={`md:hidden p-2 rounded-full ${
              isScrolled ? 'text-white hover:bg-dark-300' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Otevřít menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;