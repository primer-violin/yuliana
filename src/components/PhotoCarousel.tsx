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
      title: 'Clases Individuales',
      desc: 'Enfoque técnico personalizado en el violín. Cada alumno recibe la guía uno a uno de la profesora Yuliana para desarrollar postura, afinación y control del arco.',
    },
    {
      url: 'media__1782154465133.jpg',
      title: 'Presentaciones en Público',
      desc: 'Nuestros alumnos se presentan con orgullo en recitales locales, perdiendo el miedo escénico y compartiendo su música con la comunidad de Dr. J. E. Estigarribia.',
    },
    {
      url: 'media__1782154465098.jpg',
      title: 'Entrega de Certificados',
      desc: 'Reconocemos la perseverancia y el progreso de los niños. Cada nivel aprobado concluye con una entrega oficial de diplomas para motivar su crecimiento.',
    },
    {
      url: 'media__1782154465169.jpg',
      title: 'Expresión Artística',
      desc: 'Fomentamos una educación integral. Nuestros estudiantes no solo aprenden violín, sino también canto y lenguaje corporal para expresarse con libertad en el escenario.',
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
          <h2 className="title-accent">Nuestra Experiencia Educativa</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Imágenes reales de la profesora Yuliana Denis y sus estudiantes en audiciones, clases prácticas y entregas de diplomas en Dr. J. Eulogio Estigarribia.
          </p>
        </div>

        <div 
          className="carousel-container-compact"
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
                  <div className="slide-image-container-compact">
                    {/* Background blurred image to fill the wide card box */}
                    <img src={slide.url} alt="" className="slide-img-blur-bg" />
                    
                    {/* Foreground uncropped image inside a gold-lined frame */}
                    <div className="slide-img-frame">
                      <img src={slide.url} alt={slide.title} className="slide-img-contain" />
                    </div>
                    
                    {/* Glass overlay strip containing details */}
                    <div className="slide-overlay-glass">
                      <span className="slide-number-compact">0{index + 1} / 0{slides.length}</span>
                      <h3>{slide.title}</h3>
                      <p>{slide.desc}</p>
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
