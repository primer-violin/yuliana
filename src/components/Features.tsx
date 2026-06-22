import React from 'react';
import { Compass, Layers, Music4, Clock, Users, BookOpen } from 'lucide-react';

export const Features: React.FC = () => {
  const programs = [
    {
      icon: <Music4 size={36} />,
      title: 'Iniciación Musical',
      age: 'Niños de 4 a 7 años',
      desc: 'Clases dinámicas y grupales diseñadas para despertar el amor por la música. Aprenden ritmo a través de juegos, estimulación auditiva y sus primeros contactos con instrumentos de percusión y violín en miniatura.',
      details: [
        { icon: <Clock size={16} />, text: 'Sesiones de 45 minutos' },
        { icon: <Users size={16} />, text: 'Grupos pequeños' },
        { icon: <BookOpen size={16} />, text: 'Metodología lúdica' },
      ],
    },
    {
      icon: <Layers size={36} />,
      title: 'Violín Académico',
      age: 'Niños y Jóvenes de 8 a 17 años',
      desc: 'Formación instrumental formal. Nos enfocamos en la correcta postura corporal, agarre del arco, afinación y digitación en el violín. Avanzan a través de un repertorio clásico y folclórico paraguayo progresivo.',
      details: [
        { icon: <Clock size={16} />, text: 'Clases individuales y grupales' },
        { icon: <Users size={16} />, text: 'Seguimiento técnico riguroso' },
        { icon: <BookOpen size={16} />, text: 'Preparación para recitales' },
      ],
    },
    {
      icon: <Compass size={36} />,
      title: 'Teoría & Lenguaje Musical',
      age: 'Todos los niveles',
      desc: 'Clases teórico-prácticas fundamentales para el violinista. Aprenden lectura de partituras (solfeo), entrenamiento del oído musical, teoría y apreciación musical, permitiéndoles leer y comprender la música de forma autónoma.',
      details: [
        { icon: <Clock size={16} />, text: 'Material didáctico adaptado' },
        { icon: <Users size={16} />, text: 'Clases complementarias' },
        { icon: <BookOpen size={16} />, text: 'Lectura a primera vista' },
      ],
    },
  ];

  return (
    <section id="programas" className="section section-dark features-section">
      <div className="container">
        <div className="title-center">
          <span className="section-label">Nuestros Programas</span>
          <h2 className="title-accent">Formación Musical Estructurada</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Ofrecemos clases diseñadas para cada etapa de desarrollo de tus hijos, garantizando un aprendizaje sólido y divertido.
          </p>
        </div>

        <div className="grid grid-3">
          {programs.map((program, index) => (
            <div className="card program-card animate-fade-in" key={index}>
              <div className="card-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <span className="hero-badge" style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', marginBottom: '1.2rem', textTransform: 'none', borderBottom: 'none', border: '1px solid var(--gold-accent)' }}>
                {program.age}
              </span>
              <p>{program.desc}</p>
              
              <div className="program-details">
                {program.details.map((detail, idx) => (
                  <div className="detail-item" key={idx}>
                    <span className="gold-text">{detail.icon}</span>
                    <span>{detail.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Highlight stats section */}
        <div className="stats-container animate-fade-in">
          <div className="stat-item">
            <h4>+5 Años</h4>
            <p>Formando Jóvenes Talentos</p>
          </div>
          <div className="stat-item">
            <h4>Presencial</h4>
            <p>Interacción y Cuidado Real</p>
          </div>
          <div className="stat-item">
            <h4>100%</h4>
            <p>Atención Personalizada</p>
          </div>
        </div>
      </div>
    </section>
  );
};
