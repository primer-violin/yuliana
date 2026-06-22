import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Slide {
  url: string;
  title: string;
  desc: string;
}

export const PhotoCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      url: 'media__1782154465074.jpg',
      title: 'Técnica & Disciplina',
      desc: 'Formación individual enfocada en la postura correcta, afinación y control del arco desde la primera sesión.',
    },
    {
      url: 'media__1782154465133.jpg',
      title: 'Conciertos y Recitales',
      desc: 'Desarrolla la confianza tocando frente al público. Clases grupales y ensambles regulares en nuestra comunidad.',
    },
    {
      url: 'media__1782154465098.jpg',
      title: 'Certificaciones Oficiales',
      desc: 'Medimos tu progreso real. Evaluaciones de hitos académicos y entrega de diplomas oficiales por cada etapa aprobada.',
    },
    {
      url: 'media__1782154465169.jpg',
      title: 'Expresión Escénica',
      desc: 'Aprende a interpretar la música clásica y popular con tu propia voz artística y expresión emocional completa.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, isPlaying]);

  return (
    <section id="galeria" className="section section-mid gallery-section">
      <div className="container">
        <div className="title-center">
          <span className="section-label">Galería de Logros</span>
          <h2 className="title-accent">Nuestros Estudiantes en Acción</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Una mirada real a las etapas de aprendizaje en nuestra academia, desde la práctica en el aula hasta las presentaciones en vivo y graduaciones.
          </p>
        </div>

        <div 
          className="carousel-container"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Slides wrapper */}
          <div className="carousel-slide-wrapper">
            <div 
              className="carousel-slides" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div className="carousel-slide-item" key={index}>
                  <div className="slide-content-grid">
                    <div className="slide-image-col">
                      <img src={slide.url} alt={slide.title} className="slide-img" />
                    </div>
                    <div className="slide-info-col">
                      <span className="slide-number">0{index + 1} / 0{slides.length}</span>
                      <h3>{slide.title}</h3>
                      <p className="slide-desc">{slide.desc}</p>
                      <div className="slide-quote-box">
                        <span className="quote-icon">“</span>
                        <p>El violín no es solo un instrumento; es una extensión de la disciplina y el arte personal interpretado con paciencia.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Arrow */}
          <button className="carousel-arrow arrow-left" onClick={prevSlide} aria-label="Foto anterior">
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button className="carousel-arrow arrow-right" onClick={nextSlide} aria-label="Siguiente foto">
            <ChevronRight size={24} />
          </button>

          {/* Bottom Controls */}
          <div className="carousel-controls">
            <div className="carousel-dots">
              {slides.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`carousel-dot ${currentIndex === slideIndex ? 'active' : ''}`}
                  aria-label={`Ir a foto ${slideIndex + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="carousel-play-toggle" 
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pausar reproducción' : 'Iniciar reproducción'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
