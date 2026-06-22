import React, { useState } from 'react';
import { ClipboardEdit, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const EnrollmentForm: React.FC = () => {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('violin-academico');
  const [message, setMessage] = useState('');
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim() || !childName.trim() || !childAge.trim() || !phone.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, completa todos los campos marcados con (*).');
      return;
    }

    const ageNum = parseInt(childAge, 10);
    if (isNaN(ageNum) || ageNum <= 0 || ageNum > 25) {
      setStatus('error');
      setErrorMessage('Por favor, ingresa una edad válida del alumno (entre 1 y 25 años).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('inscriptions').insert([
        {
          representante_nombre: parentName,
          alumno_nombre: childName,
          alumno_edad: ageNum,
          telefono: phone,
          email: email.trim() || null,
          programa: program,
          mensaje: message.trim() || null,
        }
      ]);

      if (error) throw error;

      setStatus('success');
      setParentName('');
      setChildName('');
      setChildAge('');
      setPhone('');
      setEmail('');
      setMessage('');
      setProgram('violin-academico');

    } catch (err: any) {
      console.error('Error submitting inscription:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Hubo un problema al procesar tu solicitud. Por favor intenta de nuevo.'
      );
    }
  };

  return (
    <section id="inscripcion" className="section section-dark enrollment-section">
      <div className="container">
        <div className="enrollment-container">
          
          {/* Visual card for text info */}
          <div className="enrollment-info animate-fade-in" style={{ alignSelf: 'center' }}>
            <span className="section-label">Matrículas Abiertas</span>
            <h2>Inscribe a tus Hijos en "Yuliana Violín Music"</h2>
            <p>
              ¡Da el primer paso para descubrir el talento musical de tus niños! Completa el formulario de preinscripción con los datos de tu hijo y nos pondremos en contacto en menos de 24 horas por WhatsApp o llamada telefónica para coordinar una clase de diagnóstico presencial sin costo.
            </p>
            
            <div className="info-bullets" style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 className="gold-text" size={20} />
                <span>**Cupos Limitados** por grupo de edad para garantizar calidad.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 className="gold-text" size={20} />
                <span>**Clase de Diagnóstico Gratis** presencial para evaluar el violín adecuado.</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <CheckCircle2 className="gold-text" size={20} />
                <span>**Horarios adaptados** después del horario escolar.</span>
              </div>
            </div>
          </div>

          {/* Registration form card */}
          <div className="enrollment-form-card card animate-fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <ClipboardEdit size={24} className="gold-text" />
              <h3 style={{ margin: 0 }}>Formulario de Preinscripción</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-silver)', marginBottom: '2rem' }}>
              Completa los datos del representante y del alumno para reservar tu cupo.
            </p>

            {status === 'success' ? (
              <div className="alert alert-success">
                <CheckCircle2 size={24} />
                <div>
                  <strong>¡Solicitud Registrada!</strong> Nos pondremos en contacto contigo por teléfono o WhatsApp en las próximas horas para agendar tu clase inicial presencial.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '0' }}>
                  <div className="form-group">
                    <label htmlFor="parent-name" className="form-label">Nombre del Padre o Tutor *</label>
                    <input
                      type="text"
                      id="parent-name"
                      placeholder="Ej. Juan Pérez"
                      className="form-input"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      disabled={status === 'loading'}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="child-name" className="form-label">Nombre del Alumno (Hijo/a) *</label>
                    <input
                      type="text"
                      id="child-name"
                      placeholder="Ej. Mateo Pérez"
                      className="form-input"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      disabled={status === 'loading'}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '0' }}>
                  <div className="form-group">
                    <label htmlFor="child-age" className="form-label">Edad del Alumno *</label>
                    <input
                      type="number"
                      id="child-age"
                      placeholder="Ej. 8"
                      className="form-input"
                      value={childAge}
                      onChange={(e) => setChildAge(e.target.value)}
                      disabled={status === 'loading'}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Teléfono de Contacto (WhatsApp) *</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Ej. +595 971 418994"
                      className="form-input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={status === 'loading'}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email-addr" className="form-label">Correo Electrónico (Opcional)</label>
                  <input
                    type="email"
                    id="email-addr"
                    placeholder="Ej. representante@correo.com"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="program-select" className="form-label">Programa de Interés *</label>
                  <select
                    id="program-select"
                    className="form-select"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    disabled={status === 'loading'}
                  >
                    <option value="iniciacion-musical">Iniciación Musical (4 a 7 años)</option>
                    <option value="violin-academico">Violín Académico (8 a 17 años)</option>
                    <option value="lenguaje-musical">Teoría & Lenguaje Musical</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="msg-details" className="form-label">Mensaje / Preguntas Adicionales</label>
                  <textarea
                    id="msg-details"
                    className="form-textarea"
                    placeholder="Escribe aquí cualquier condición especial del niño, o duda que tengas sobre horarios..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <div className="form-error-msg" style={{ marginBottom: '1.5rem' }}>
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
                      <Loader2 size={18} className="animate-spin" /> Procesando Solicitud...
                    </>
                  ) : (
                    <>
                      Enviar Preinscripción
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
