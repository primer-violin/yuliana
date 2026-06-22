import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: '¿Es muy tarde para aprender a tocar el violín si ya soy adulto?',
      answer: '¡Para nada! Aunque existe el mito de que el violín debe aprenderse en la infancia, los adultos tienen grandes ventajas: mayor capacidad de autodisciplina, mejor comprensión de los conceptos teóricos y geométricos, y una motivación clara. Nuestro método está adaptado específicamente a la mentalidad de un adulto, omitiendo canciones infantiles y enfocándose en técnica real desde el día uno.',
    },
    {
      question: '¿Necesito conocimientos previos de música o saber leer partituras?',
      answer: 'No necesitas saber absolutamente nada de música. Nuestro curso incluye un módulo inicial de nivelación donde aprenderás a leer partituras de forma progresiva, relacionando cada nota directamente con la posición de tus dedos en el diapasón de manera visual e intuitiva.',
    },
    {
      question: '¿Qué tipo de violín necesito comprar para comenzar?',
      answer: 'Para adultos, se utiliza un violín de tamaño estándar 4/4 (tamaño completo). No necesitas gastar una fortuna; existen violines de estudio de excelente relación calidad-precio (entre $100 y $250 USD) que son perfectos para comenzar. En nuestro Kit de Inicio Gratuito incluimos una lista detallada con marcas recomendadas y accesorios esenciales (resina, almohadilla, afinador).',
    },
    {
      question: '¿Cómo funciona la revisión de videos y el soporte técnico?',
      answer: 'Al final de cada módulo práctico, tendrás un ejercicio de evaluación. Simplemente te grabas con tu teléfono móvil tocando dicho ejercicio y subes el video a tu zona de estudiante. Un profesor revisará tu video en un plazo máximo de 48 horas laborables y te enviará comentarios detallados en texto o video sobre tu afinación, postura corporal y agarre del arco.',
    },
    {
      question: '¿Cuánto tiempo de práctica diario se recomienda?',
      answer: 'En el violín, la constancia es mucho más valiosa que las sesiones maratónicas. Recomendamos una práctica de 20 a 30 minutos diarios, de 5 a 6 días a la semana. Este ritmo permite que tus músculos se adapten sin fatiga y que tu cerebro asimile la memoria motora de forma efectiva.',
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
          <span className="section-label">Resolviendo Dudas</span>
          <h2 className="title-accent">Preguntas Frecuentes</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            Respuestas a las preguntas más habituales de los adultos que deciden dar el paso de aprender violín con nosotros.
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
