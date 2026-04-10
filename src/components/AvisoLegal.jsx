import React from 'react';
import '../index.css';

const AvisoLegal = () => {
    return (
        <section className="legal-section" style={{ padding: '8rem 0 4rem', minHeight: '80vh', backgroundColor: 'var(--pastel-bg)' }}>
            <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-900)' }}>Aviso Legal</h1>
                
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-800)', marginTop: '2rem', marginBottom: '1rem' }}>1. Información General</h2>
                    <p>En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios que el titular de este sitio web es:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Titular:</strong> Noelia Yoga</li>
                        <li><strong>Teléfono de contacto:</strong> <a href="tel:+34633073841" style={{ color: 'var(--primary-600)', textDecoration: 'none' }}>+34 633 07 38 41</a></li>
                        <li><strong>Correo electrónico:</strong> <a href="mailto:japmantkaur@gmail.com" style={{ color: 'var(--primary-600)', textDecoration: 'none' }}>japmantkaur@gmail.com</a></li>
                    </ul>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-800)', marginTop: '2rem', marginBottom: '1rem' }}>2. Condiciones Generales de Uso</h2>
                    <p>El acceso y uso de este sitio web atribuye la condición de Usuario y exige la aceptación plena y sin reservas de todas y cada una de las disposiciones contenidas en este Aviso Legal.</p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-800)', marginTop: '2rem', marginBottom: '1rem' }}>3. Propiedad Intelectual e Industrial</h2>
                    <p>Los textos, imágenes, logos, signos distintivos, sonidos, animaciones, vídeos, código fuente y resto de contenidos incluidos en este sitio son propiedad de Noelia Yoga o este dispone del derecho de uso y explotación de los mismos.</p>
                </div>
            </div>
        </section>
    );
};

export default AvisoLegal;
