import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    // Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AnimatePresence mode="wait">
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Profile />
          <Contact />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;