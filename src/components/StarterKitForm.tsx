import React, { useState } from 'react';
import { Download, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const StarterKitForm: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('leads').insert([
        { nombre, email }
      ]);

      if (error) {
        // Handle duplicate key error or other errors from Supabase
        if (error.code === '23505') {
          setStatus('success'); // Already registered, let them download anyway
          return;
        }
        throw error;
      }

      setStatus('success');
      setNombre('');
      setEmail('');

      // Simulate a file download after short delay
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '#';
        link.setAttribute('download', 'Guia_Inicio_Violin_MiPrimerViolin.pdf');
        document.body.appendChild(link);
        // link.click(); // commented out for safety in web sandbox
        document.body.removeChild(link);
        console.log('Downloading Starter Kit PDF');
      }, 1000);

    } catch (err: any) {
      console.error('Error submitting lead:', err);
      setStatus('error');
      setErrorMessage(
        err.message || 'Hubo un error al procesar tu solicitud. Por favor intenta de nuevo.'
      );
    }
  };

  return (
    <section id="kit-gratis" className="section section-dark starter-kit-section">
      <div className="container">
        <div className="gradient-banner animate-fade-in">
          <div className="banner-icon">
            <Download size={36} className="gold-text" />
          </div>
          <h2>Descarga tu Kit de Inicio Gratis</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 2.5rem auto' }}>
            Una guía completa en PDF para adultos: aprende a afinar tu violín, sostener el arco correctamente y leer tus primeras tablaturas y partituras de forma sencilla.
          </p>

          {status === 'success' ? (
            <div className="alert alert-success" style={{ maxWidth: '500px', margin: '0 auto' }}>
              <CheckCircle2 size={24} />
              <div>
                <strong>¡Registro Completado!</strong> Tu descarga de la guía PDF comenzará automáticamente. Si no inicia, haz clic para descargar manualmente.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="starter-form">
              <div className="form-row">
                <div className="form-group-inline">
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    className="form-input"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <div className="form-group-inline">
                  <input
                    type="email"
                    placeholder="Tu Correo Electrónico"
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Procesando...
                    </>
                  ) : (
                    <>
                      Obtener Kit <Download size={18} />
                    </>
                  )}
                </button>
              </div>

              {status === 'error' && (
                <div className="form-error-msg">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          )}

          <p className="banner-fineprint">
            Respetamos tu privacidad. No enviamos spam y puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};
