import React from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
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
    <header id="inicio" className="section section-dark hero-section">
      <div className="gradient-overlay"></div>
      <div className="container hero-inner">
        <div className="hero-content animate-fade-in">
          <span className="hero-badge">Clases Presenciales • Dr. J. E. Estigarribia</span>
          <h1>Despierta tu Talento Musical</h1>
          <p>
            Descubre tu pasión por la música con nuestra formación artística integral en violín y lenguaje musical. La maestra Yuliana guía a niños, jóvenes y adultos en su desarrollo técnico y artístico.
          </p>
          <div className="hero-ctas">
            <button onClick={() => handleScrollTo('inscripcion')} className="btn btn-primary">
              Inscribirse Ahora <ArrowRight size={18} />
            </button>
            <button onClick={() => handleScrollTo('programas')} className="btn btn-secondary">
              Ver Programas
            </button>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <MapPin size={18} className="gold-text" />
              <span>Barrio Santa Catalina</span>
            </div>
            <div className="trust-item">
              <Calendar size={18} className="gold-text" />
              <span>Horarios Flexibles</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in">
          <div className="hero-image-wrapper">
            <img
              src={`${import.meta.env.BASE_URL}media__1782154465074.jpg`}
              alt="Teacher Yuliana Denis con violín"
              className="hero-image"
            />
            <div className="floating-badge badge-1">
              <h4>Teacher</h4>
              <p>Yuliana Denis</p>
            </div>
            <div className="floating-badge badge-2">
              <h4>Clases</h4>
              <p>Presenciales</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
