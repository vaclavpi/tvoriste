import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import image from '../public/favicon.svg'; // Adjust the path as necessary

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-1 text-primary-500">
          <image type="image/svg+xml" href="../public/favicon.svg" className="h-8 w-8" />
          <span className="text-2xl font-heading font-bold">Tvořiště s.r.o.</span>
        </a>
        

        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#sluzby" className="font-medium hover:text-primary-500 transition-colors">Služby</a>
          <a href="#portfolio" className="font-medium hover:text-primary-500 transition-colors">Portfolio</a>
          <a href="#o-nas" className="font-medium hover:text-primary-500 transition-colors">O nás</a>
          <a href="#tym" className="font-medium hover:text-primary-500 transition-colors">Náš tým</a>
          <a href="#kontakt" className="font-medium hover:text-primary-500 transition-colors">Kontakt</a>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Přepnout motiv"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="flex items-center md:hidden space-x-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Přepnout motiv"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="flex flex-col py-4">
            <a 
              href="#sluzby" 
              className="px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Služby
            </a>
            <a 
              href="#portfolio" 
              className="px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#o-nas" 
              className="px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              O nás
            </a>
            <a 
              href="#tym" 
              className="px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Náš tým
            </a>
            <a 
              href="#kontakt" 
              className="px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;