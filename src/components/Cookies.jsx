import React from 'react';
import '../index.css';

const Cookies = () => {
    return (
        <section className="legal-section" style={{ padding: '8rem 0 4rem', minHeight: '80vh', backgroundColor: 'var(--pastel-bg)' }}>
            <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-900)' }}>Política de Cookies</h1>
                
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <p>Esta política le informa sobre cómo Noelia Yoga utiliza las cookies en este sitio web, cumpliendo con la legislación española y europea en materia de servicios de la sociedad de la información.</p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-800)', marginTop: '2rem', marginBottom: '1rem' }}>1. ¿Qué son las cookies?</h2>
                    <p>Las cookies son pequeños ficheros de texto que se descargan en el equipo del usuario al acceder a determinadas páginas web. Permiten almacenar y recuperar información sobre los hábitos de navegación del usuario o de su equipo.</p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-800)', marginTop: '2rem', marginBottom: '1rem' }}>2. ¿Qué cookies utilizamos?</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        <li><strong>Cookies técnicas (necesarias):</strong> Son imprescindibles para el correcto funcionamiento de la web (como recordar tu inicio de sesión o manejar la seguridad). No pueden ser desactivadas en nuestros sistemas.</li>
                        <li><strong>Cookies de análisis:</strong> Tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y realizar la medición estadística para mejorar nuestra oferta de servicios.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-800)', marginTop: '2rem', marginBottom: '1rem' }}>3. Cómo configurar o desactivar sus cookies</h2>
                    <p>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador de Internet. En caso de que no permitas la instalación de cookies, es posible que no puedas acceder a algunos servicios.</p>
                </div>
            </div>
        </section>
    );
};

export default Cookies;
