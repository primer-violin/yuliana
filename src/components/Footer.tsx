import React from 'react';
import { Music, Facebook, Youtube, Instagram, ChevronUp, MapPin, Phone, Mail } from 'lucide-react';

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
      const offset = 90;
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
            <a href="#inicio" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-flex' }} onClick={(e) => handleScrollTo(e, 'inicio')}>
              <Music size={26} />
              Yuliana <span>Violín Music</span>
            </a>
            <p className="footer-desc">
              Clases presenciales de violín y música para niños y jóvenes. Formamos la técnica instrumental y la sensibilidad artística de la mano de la profesora Yuliana Denis en Paraguay.
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
              <li><a href="#programas" onClick={(e) => handleScrollTo(e, 'programas')}>Programas</a></li>
              <li><a href="#profesora" onClick={(e) => handleScrollTo(e, 'profesora')}>Profesora</a></li>
              <li><a href="#galeria" onClick={(e) => handleScrollTo(e, 'galeria')}>Galería</a></li>
            </ul>
          </div>

          <div className="footer-col-links">
            <h4>Contacto</h4>
            <ul style={{ gap: '0.9rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} className="gold-text" />
                <span>Barrio Santa Catalina, Calle 1° de Marzo</span>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <Phone size={16} className="gold-text" />
                <a href="https://wa.me/595971418994" target="_blank" rel="noopener noreferrer" className="gold-text-hover">
                  +595 971 418994
                </a>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <Mail size={16} className="gold-text" />
                <a href="mailto:yulianadenis899@gmail.com" className="gold-text-hover">
                  yulianadenis899@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Yuliana Violín Music. Todos los derechos reservados. Dr. J. Eulogio Estigarribia, Paraguay.</p>
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
