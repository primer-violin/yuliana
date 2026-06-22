import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
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
    <header id="inicio" className="section section-dark hero-section">
      <div className="gradient-overlay"></div>
      <div className="container hero-inner">
        <div className="hero-content animate-fade-in">
          <span className="hero-badge">Tradición Italiana para Adultos</span>
          <h1>Nunca es Tarde para Aprender Violín</h1>
          <p>
            Descubre un método estructurado, secuencial y sin atajos. Diseñado específicamente para adultos que desean desarrollar una técnica sólida, control del arco y expresión musical auténtica, todo en español y a su propio ritmo.
          </p>
          <div className="hero-ctas">
            <button onClick={() => handleScrollTo('kit-gratis')} className="btn btn-primary">
              Kit de Inicio Gratis <ArrowRight size={18} />
            </button>
            <button onClick={() => handleScrollTo('metodo')} className="btn btn-secondary">
              Ver el Método
            </button>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <ShieldCheck size={18} className="gold-text" />
              <span>Garantía de progreso real</span>
            </div>
            <div className="trust-item">
              <BookOpen size={18} className="gold-text" />
              <span>Soporte personalizado constante</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container animate-fade-in">
          <div className="hero-image-wrapper">
            <img
              src="hero_violin_asset.png"
              alt="Violín clásico de la academia italiana"
              className="hero-image"
            />
            <div className="floating-badge badge-1">
              <h4>100%</h4>
              <p>En Español</p>
            </div>
            <div className="floating-badge badge-2">
              <h4>Guía</h4>
              <p>Paso a Paso</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
