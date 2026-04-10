import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--primary-900)', color: 'white', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Noelia Yoga</h3>
                        <p style={{ color: 'var(--primary-100)', lineHeight: '1.6' }}>
                            Llevando el bienestar a cada rincón de Leganés y la zona sur de Madrid. Yoga moderno, accesible y transformador.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>Enlaces</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <a href="/#" style={{ color: 'var(--primary-100)', opacity: '0.8', textDecoration: 'none' }}>Inicio</a>
                            <a href="/#services" style={{ color: 'var(--primary-100)', opacity: '0.8', textDecoration: 'none' }}>Servicios</a>
                            <a href="/#about" style={{ color: 'var(--primary-100)', opacity: '0.8', textDecoration: 'none' }}>Sobre Mí</a>
                            <a href="/#contact" style={{ color: 'var(--primary-100)', opacity: '0.8', textDecoration: 'none' }}>Contacto</a>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ color: 'white', marginBottom: '1.5rem', fontFamily: 'Inter, sans-serif', fontWeight: 'bold' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <Link to="/aviso-legal" style={{ color: 'var(--primary-100)', opacity: '0.8', textDecoration: 'none' }}>Aviso Legal</Link>
                            <Link to="/privacidad" style={{ color: 'var(--primary-100)', opacity: '0.8', textDecoration: 'none' }}>Privacidad</Link>
                            <Link to="/cookies" style={{ color: 'var(--primary-100)', opacity: '0.8', textDecoration: 'none' }}>Cookies</Link>
                        </div>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
                    © {new Date().getFullYear()} Noelia Yoga. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
