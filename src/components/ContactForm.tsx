import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const mapQuery = encodeURIComponent('Dr. J. Eulogio Estigarribia Santa Catalina');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return (
    <section id="contacto" className="section section-mid contact-section">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Contact Cards */}
          <div className="contact-info animate-fade-in">
            <span className="section-label">Contacto Directo</span>
            <h2>Visita Nuestra Academia</h2>
            <p>
              Estamos listos para recibirte. Si deseas visitarnos personalmente para conocer nuestras aulas y conversar sobre las clases de tu hijo, puedes encontrarnos en la siguiente dirección en Dr. J. Eulogio Estigarribia:
            </p>

            <div className="info-cards" style={{ marginTop: '2.5rem' }}>
              <div className="info-card">
                <MapPin size={24} className="gold-text" style={{ flexShrink: 0 }} />
                <div>
                  <h4>Dirección Física</h4>
                  <p>Calle 1° de Marzo, Barrio Santa Catalina</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Dr. J. Eulogio Estigarribia, Paraguay</p>
                </div>
              </div>

              <div className="info-card">
                <Phone size={24} className="gold-text" style={{ flexShrink: 0 }} />
                <div>
                  <h4>Teléfono & WhatsApp</h4>
                  <a 
                    href="https://wa.me/595971418994" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gold-text-hover"
                    style={{ fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    +595 971 418994 <ExternalLink size={14} />
                  </a>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Envíanos un mensaje para programar una cita.</p>
                </div>
              </div>

              <div className="info-card">
                <Mail size={24} className="gold-text" style={{ flexShrink: 0 }} />
                <div>
                  <h4>Correo Electrónico</h4>
                  <a 
                    href="mailto:yulianadenis899@gmail.com" 
                    className="gold-text-hover"
                    style={{ fontWeight: 600 }}
                  >
                    yulianadenis899@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-card">
                <Clock size={24} className="gold-text" style={{ flexShrink: 0 }} />
                <div>
                  <h4>Horario de Atención</h4>
                  <p>Lunes a Viernes: 13:00 - 18:30</p>
                  <p>Sábados: 08:30 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized map representation matching dark theme */}
          <div className="contact-map-col animate-fade-in">
            <div className="map-box">
              <div className="map-header">
                <MapPin size={18} className="gold-text" />
                <h4>Ubicación de la Academia</h4>
              </div>
              <div className="map-placeholder">
                {/* Visual stylization of dark/gold theme map */}
                <div style={{ 
                  position: 'absolute', 
                  width: '100%', 
                  height: '100%', 
                  background: 'radial-gradient(circle, rgba(14, 42, 36, 0.4) 0%, rgba(3, 10, 8, 0.95) 90%)',
                  backgroundImage: 'radial-gradient(var(--emerald-light) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                  opacity: 0.6,
                  top: 0,
                  left: 0
                }}></div>
                
                {/* Styled vector roads representation */}
                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.25 }}>
                  <line x1="0" y1="120" x2="400" y2="120" stroke="var(--gold-accent)" strokeWidth="4" />
                  <line x1="150" y1="0" x2="150" y2="300" stroke="var(--gold-accent)" strokeWidth="3" />
                  <line x1="300" y1="0" x2="300" y2="300" stroke="var(--gold-accent)" strokeWidth="2" />
                  <text x="160" y="105" fill="var(--gold-accent)" fontSize="10" letterSpacing="2">CALLE 1° DE MARZO</text>
                  <text x="310" y="50" fill="var(--gold-accent)" fontSize="8" letterSpacing="1">BARRIO SANTA CATALINA</text>
                </svg>

                {/* Pulsing gold pin */}
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div className="map-pin-pulse"></div>
                  <div className="map-pin-point">
                    <MapPin size={32} className="gold-text" />
                  </div>
                </div>

                <div style={{ position: 'relative', zIndex: 10, marginTop: '1rem' }}>
                  <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Yuliana Violín Music</h4>
                  <p style={{ color: 'var(--text-gold-light)', fontSize: '0.85rem', margin: 0 }}>Barrio Santa Catalina</p>
                </div>
              </div>
              
              <div className="map-address-banner">
                <p style={{ margin: '0 0 0.75rem 0', fontSize: '0.9rem' }}>
                  Haz clic a continuación para abrir las indicaciones directamente en Google Maps desde tu móvil o computadora.
                </p>
                <a 
                  href={googleMapsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', width: '100%' }}
                >
                  Ver en Google Maps <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
