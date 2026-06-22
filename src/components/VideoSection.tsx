import React from 'react';
import { Send, MessageSquare, CheckCircle, Video } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <section id="progreso" className="section section-mid video-feedback-section">
      <div className="gradient-overlay"></div>
      <div className="container video-feedback-inner">
        <div className="video-feedback-image animate-fade-in">
          {/* Simulated Teacher Review Interface */}
          <div className="feedback-ui-wrapper">
            <div className="feedback-video-player">
              <img 
                src="media__1782154465133.jpg" 
                alt="Estudiante practicando violín" 
                className="feedback-video-frame"
              />
              <div className="player-overlay">
                <span className="player-badge">Video del Alumno #04</span>
                <span className="player-time">01:45</span>
              </div>
            </div>
            
            {/* Overlay teacher annotation */}
            <div className="teacher-comment-card">
              <div className="teacher-avatar">MC</div>
              <div className="teacher-comment-content">
                <h5>Maestro Corrector</h5>
                <p>“Buen sonido. Mantén el codo derecho un poco más relajado al bajar el arco en la cuerda de Sol. Esto evitará tensiones innecesarias en la muñeca.”</p>
                <div className="comment-timestamp">Minuto 01:22 • Corrección Técnica</div>
              </div>
            </div>

            <div className="feedback-steps">
              <div className="mini-step">
                <Video size={16} className="gold-text" />
                <span>Graba tu práctica</span>
              </div>
              <div className="mini-step">
                <Send size={16} className="gold-text" />
                <span>Envía por la app</span>
              </div>
              <div className="mini-step">
                <MessageSquare size={16} className="gold-text" />
                <span>Recibe feedback</span>
              </div>
            </div>
          </div>
        </div>

        <div className="video-feedback-text animate-fade-in">
          <span className="section-label">Acompañamiento Sin Excepciones</span>
          <h2 className="title-accent">El Maestro de Violín en tu Bolsillo</h2>
          <p>
            El mayor peligro de aprender violín por internet de forma autónoma es adquirir vicios posturales y errores de afinación que luego son muy difíciles de corregir.
          </p>
          <p>
            Con nuestro sistema de <strong>envío de videos</strong>, grabas tus ejercicios directamente desde tu móvil o webcam y los subes a la plataforma. Nuestro equipo de maestros revisa tu postura, el agarre del arco y tu afinación, enviándote un análisis personalizado con correcciones constructivas para tu práctica semanal.
          </p>

          <ul className="feedback-bullets">
            <li>
              <CheckCircle size={20} className="gold-text" />
              <span>Feedback honesto y personalizado, sin falsos elogios.</span>
            </li>
            <li>
              <CheckCircle size={20} className="gold-text" />
              <span>Sesiones grupales de preguntas y respuestas en vivo.</span>
            </li>
            <li>
              <CheckCircle size={20} className="gold-text" />
              <span>Revisiones semanales para asegurar que practiques con confianza.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
