import React from 'react';
import { CheckCircle, Music, BookOpen, Mic } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section id="profesora" className="section section-mid video-feedback-section">
      <div className="gradient-overlay"></div>
      <div className="container video-feedback-inner">
        <div className="video-feedback-image animate-fade-in">
          {/* Visual Presentation of Yuliana on Stage */}
          <div className="feedback-ui-wrapper">
            <div className="feedback-video-player">
              <img 
                src={`${import.meta.env.BASE_URL}media__1782154465133.jpg`} 
                alt="Profesora Yuliana Denis en el recital" 
                className="feedback-video-frame"
              />
              <div className="player-overlay">
                <span className="player-badge">Presentación en Vivo</span>
                <span className="player-time">Recital Académico</span>
              </div>
            </div>
            
            {/* Annotation card with Yuliana's teaching philosophy */}
            <div className="teacher-comment-card">
              <div className="teacher-avatar">YD</div>
              <div className="teacher-comment-content">
                <h5>Prof. Yuliana Denis</h5>
                <p>“Mi mayor objetivo es que los niños no solo aprendan a tocar notas correctas, sino que sientan y expresen la música con alegría y libertad.”</p>
                <div className="comment-timestamp">Directora • Yuliana Violín Music</div>
              </div>
            </div>

            <div className="feedback-steps">
              <div className="mini-step">
                <Music size={16} className="gold-text" />
                <span>Teoría Básica</span>
              </div>
              <div className="mini-step">
                <BookOpen size={16} className="gold-text" />
                <span>Práctica Técnica</span>
              </div>
              <div className="mini-step">
                <Mic size={16} className="gold-text" />
                <span>Canto & Ritmo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="video-feedback-text animate-fade-in">
          <span className="section-label">Nuestra Profesora</span>
          <h2 className="title-accent">Clases con Yuliana Denis</h2>
          <p>
            Soy **Yuliana Denis**, una apasionada profesora de música y violín dedicada a la formación artística de niños y jóvenes en el Barrio Santa Catalina, Dr. J. Eulogio Estigarribia.
          </p>
          <p>
            Mi metodología se enfoca en hacer de la música un camino natural y enriquecedor. Combinando la disciplina técnica clásica italiana con actividades didácticas, nos aseguramos de que cada alumno desarrolle una postura sana, un oído afinado y una gran confianza escénica.
          </p>

          <ul className="feedback-bullets">
            <li>
              <CheckCircle size={20} className="gold-text" />
              <span>**Atención 1-a-1**: Corrección de postura y arco en tiempo real en cada clase.</span>
            </li>
            <li>
              <CheckCircle size={20} className="gold-text" />
              <span>**Estimulación Auditiva y Vocal**: Clases que integran solfeo y práctica coral básica.</span>
            </li>
            <li>
              <CheckCircle size={20} className="gold-text" />
              <span>**Práctica Local y Social**: Clases presenciales para fomentar la amistad y el compañerismo.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
