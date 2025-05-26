import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Profile', to: 'profile' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-wood-lightest/90 dark:bg-wood-darkest/90 shadow-md backdrop-blur-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
          className="cursor-pointer"
        >
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-serif text-2xl font-bold text-wood-dark dark:text-wood-light">PK</span>
            <span className="hidden sm:block font-serif text-xl text-wood-dark dark:text-wood-light">Pawan Kumar</span>
          </motion.div>
        </ScrollLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              className="navbar-link"
              activeClass="active"
            >
              {link.name}
            </ScrollLink>
          ))}
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-wood-light dark:bg-wood-dark text-wood-dark dark:text-wood-light hover:text-accent-primary dark:hover:text-accent-secondary transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-wood-light dark:bg-wood-dark text-wood-dark dark:text-wood-light"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-wood-dark dark:text-wood-light hover:bg-wood-light dark:hover:bg-wood-dark transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-wood-lightest dark:bg-wood-darkest border-t border-wood-light dark:border-wood-dark"
          >
            <div className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="py-2 px-4 text-lg font-medium text-wood-dark dark:text-wood-light hover:bg-wood-light dark:hover:bg-wood-dark rounded-md transition-colors"
                  activeClass="text-accent-primary dark:text-accent-secondary bg-wood-light dark:bg-wood-dark"
                  onClick={closeMenu}
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;