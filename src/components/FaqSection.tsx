import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: '¿A partir de qué edad puede comenzar mi hijo/a a aprender violín?',
      answer: 'Ofrecemos programas desde los 4 años de edad. Para los niños de 4 a 7 años, recomendamos el programa de Iniciación Musical, que estimula el oído y ritmo a través de juegos. A partir de los 8 años, pueden ingresar al programa formal de Violín Académico, donde desarrollan la técnica del instrumento con clases individuales.',
    },
    {
      question: '¿Es necesario que los padres estén presentes durante la clase?',
      answer: 'Para la Iniciación Musical (4 a 7 años), alentamos a los padres a estar presentes, ya que esto ayuda a los pequeños a sentirse seguros y les permite a los tutores entender los juegos rítmicos para repetirlos en casa. Para alumnos de 8 años en adelante, los padres pueden esperar cómodamente en nuestra sala de espera.',
    },
    {
      question: '¿La academia provee el instrumento o debo comprar uno antes de empezar?',
      answer: 'Contamos con violines de diversos tamaños en nuestras aulas (desde escalas pequeñas de 1/16 hasta tamaño completo 4/4) para que el alumno los use en sus primeras clases de diagnóstico. Sin embargo, para la práctica diaria en casa, es fundamental que el alumno tenga su propio instrumento. Antes de comprar, nosotros mediremos el brazo de tu hijo/a y te indicaremos el tamaño exacto necesario.',
    },
    {
      question: '¿Dónde están ubicados y cuáles son los horarios disponibles?',
      answer: 'Nos encontramos en el Barrio Santa Catalina, Dr. J. Eulogio Estigarribia (ex Campo 9), Paraguay, sobre la Calle 1° de Marzo. Nuestras clases presenciales se imparten de lunes a viernes en horario vespertino (después del horario escolar) y los sábados por la mañana, coordinando horarios fijos para cada alumno.',
    },
    {
      question: '¿Cómo funciona la clase de diagnóstico gratuita?',
      answer: 'Es una sesión presencial de 15 a 20 minutos donde el alumno tiene contacto con el violín por primera vez. Evaluamos su afinación básica, su coordinación y medimos su tamaño para recomendar el violín adecuado. Puedes solicitarla completando el formulario de Preinscripción en esta web y te escribiremos por WhatsApp para coordinar.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="section section-dark faq-section">
      <div className="container">
        <div className="title-center">
          <span className="section-label">Dudas Frecuentes</span>
          <h2 className="title-accent">Preguntas de los Padres</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Respuestas a las consultas habituales de los representantes al inscribir a sus hijos en nuestra academia.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                className={`faq-item-card ${isOpen ? 'active' : ''}`} 
                key={index}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-row">
                  <h3>{faq.question}</h3>
                  <div className="faq-toggle-icon">
                    <ChevronDown size={20} />
                  </div>
                </div>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
