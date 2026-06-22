import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Calendar } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const ContactForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [nivelExperiencia, setNivelExperiencia] = useState('principiante');
  const [mensaje, setMensaje] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, completa todos los campos requeridos.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          nombre,
          email,
          nivel_experiencia: nivelExperiencia,
          mensaje,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setNombre('');
      setEmail('');
      setNivelExperiencia('principiante');
      setMensaje('');
    } catch (err: any) {
      console.error('Error submitting contact message:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.'
      );
    }
  };

  return (
    <section id="contacto" className="section section-mid contact-section">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div className="contact-info animate-fade-in">
            <span className="section-label">Comienza tu Viaje</span>
            <h2>¿Listo para empezar a tocar el violín?</h2>
            <p>
              ¿Tienes dudas sobre qué tamaño de violín comprar, cómo es la dinámica de clases o si este curso es para ti? Escríbenos directamente o solicita una breve llamada de orientación de 15 minutos sin costo.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <Calendar size={24} className="gold-text" />
                <div>
                  <h4>Llamada de Orientación</h4>
                  <p>15 minutos de diagnóstico técnico inicial gratuito con el profesor.</p>
                </div>
              </div>
              <div className="info-card">
                <Send size={24} className="gold-text" />
                <div>
                  <h4>Soporte Rápido</h4>
                  <p>Respondemos a tus preguntas en menos de 24 horas laborables.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper card animate-fade-in">
            <h3>Envíanos un Mensaje</h3>
            <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>
              Rellena el formulario para programar tu asesoría o resolver tus dudas.
            </p>

            {status === 'success' ? (
              <div className="alert alert-success">
                <CheckCircle2 size={24} />
                <div>
                  <strong>¡Mensaje Enviado con Éxito!</strong> Nos pondremos en contacto contigo en las próximas horas para coordinar tu asesoría.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Tu Nombre *</label>
                  <input
                    type="text"
                    id="contact-name"
                    className="form-input"
                    placeholder="Ej. Sofía Martínez"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    disabled={status === 'loading'}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Tu Correo Electrónico *</label>
                  <input
                    type="email"
                    id="contact-email"
                    className="form-input"
                    placeholder="Ej. sofia@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-level" className="form-label">Nivel de Experiencia</label>
                  <select
                    id="contact-level"
                    className="form-select"
                    value={nivelExperiencia}
                    onChange={(e) => setNivelExperiencia(e.target.value)}
                    disabled={status === 'loading'}
                  >
                    <option value="principiante">Principiante Absoluto (Nunca he tocado)</option>
                    <option value="retornado">Retornado (Toqué hace años y quiero retomar)</option>
                    <option value="intermedio">Intermedio (Sé leer partituras sencillas)</option>
                    <option value="avanzado">Avanzado (Busco perfeccionar técnica superior)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Tu Mensaje / Preguntas *</label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder="Cuéntanos sobre tus metas con el violín y tus dudas..."
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    disabled={status === 'loading'}
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error-msg" style={{ justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
