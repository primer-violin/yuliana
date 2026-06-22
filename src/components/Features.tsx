import React from 'react';
import { Compass, Layers, Music4 } from 'lucide-react';

export const Features: React.FC = () => {
  const pillars = [
    {
      icon: <Layers size={36} />,
      title: 'Método Secuencial y Graduado',
      desc: 'Todas las lecciones están numeradas y ordenadas progresivamente. Sabrás exactamente qué practicar hoy y qué objetivo debes cumplir antes de pasar al siguiente nivel, sin saltos confusos.',
    },
    {
      icon: <Compass size={36} />,
      title: 'Diseñado para Adultos',
      desc: 'No aprenderás con canciones infantiles. Enfocamos la teoría musical y la práctica técnica en obras de repertorio real adaptadas, permitiéndote conectar emocionalmente con la música desde el inicio.',
    },
    {
      icon: <Music4 size={36} />,
      title: 'Herencia y Estilo Italiano',
      desc: 'Inspirado en la gran tradición clásica de violín en Italia. Nos enfocamos en la belleza del sonido, el fraseo expresivo y el control del arco, logrando que tu violín cante con un tono rico y libre.',
    },
  ];

  return (
    <section id="metodo" className="section section-dark features-section">
      <div className="container">
        <div className="title-center">
          <span className="section-label">Nuestros Pilares</span>
          <h2 className="title-accent">El Método "Mi Primer Violín"</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Aprender de forma online no significa aprender solo. Te proporcionamos la estructura, el contexto y la guía para avanzar con total claridad.
          </p>
        </div>

        <div className="grid grid-3">
          {pillars.map((pillar, index) => (
            <div className="card pillar-card animate-fade-in" key={index}>
              <div className="card-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Highlight stats section */}
        <div className="stats-container animate-fade-in">
          <div className="stat-item">
            <h4>+200</h4>
            <p>Lecciones en Video HD</p>
          </div>
          <div className="stat-item">
            <h4>1-a-1</h4>
            <p>Retroalimentación Directa</p>
          </div>
          <div className="stat-item">
            <h4>100%</h4>
            <p>Alumnos Adultos</p>
          </div>
        </div>
      </div>
    </section>
  );
};
