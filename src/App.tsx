import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PhotoCarousel } from './components/PhotoCarousel';
import { VideoSection } from './components/VideoSection';
import { StarterKitForm } from './components/StarterKitForm';
import { ContactForm } from './components/ContactForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = ['inicio', 'metodo', 'galeria', 'progreso', 'kit-gratis', 'contacto', 'preguntas'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 120; // adding offset for nav bar height
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Initial check
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <Features />
      <PhotoCarousel />
      <VideoSection />
      <StarterKitForm />
      <ContactForm />
      <FaqSection />
      <Footer />
    </>
  );
}

export default App;
