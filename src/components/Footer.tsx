import React from 'react';
import { Music, Facebook, Youtube, Instagram, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col-info">
            <a href="#inicio" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <Music size={26} />
              Mi Primer <span>Violín</span>
            </a>
            <p className="footer-desc">
              Academia online premium dedicada a formar violinistas adultos mediante un método estructurado, secuencial y con acompañamiento constante de maestros reales. Sin atajos, progreso real.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col-links">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio" onClick={(e) => handleScrollTo(e, 'inicio')}>Inicio</a></li>
              <li><a href="#metodo" onClick={(e) => handleScrollTo(e, 'metodo')}>El Método</a></li>
              <li><a href="#galeria" onClick={(e) => handleScrollTo(e, 'galeria')}>Galería</a></li>
              <li><a href="#progreso" onClick={(e) => handleScrollTo(e, 'progreso')}>Tu Progreso</a></li>
            </ul>
          </div>

          <div className="footer-col-links">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#kit-gratis" onClick={(e) => handleScrollTo(e, 'kit-gratis')}>Kit de Inicio Gratis</a></li>
              <li><a href="#contacto" onClick={(e) => handleScrollTo(e, 'contacto')}>Reserva Asesoría</a></li>
              <li><a href="#preguntas" onClick={(e) => handleScrollTo(e, 'preguntas')}>FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Mi Primer Violín. Todos los derechos reservados. Inspirado en la tradición clásica de violín italiana.</p>
          <button 
            className="scroll-top-btn" 
            onClick={handleScrollToTop} 
            aria-label="Volver arriba"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
