import React from 'react';
import yogaInstruction from '../assets/yoga-instruction.png';
import '../index.css';

const About = () => {
    return (
        <section className="about-section" id="about" style={{ padding: '5rem 0', background: 'white' }}>
            <div className="container">
                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    <div className="about-image-wrapper animate-fade-in" style={{ position: 'relative' }}>
                        <div className="about-shape" style={{
                            position: 'absolute', top: '-20px', left: '-20px',
                            width: '100%', height: '100%',
                            background: 'var(--primary-100)', borderRadius: '2rem', zIndex: 0
                        }} />
                        <div className="about-visual" style={{
                            position: 'relative', height: '400px',
                            background: 'linear-gradient(135deg, var(--pastel-primary), var(--pastel-accent))',
                            borderRadius: '2rem', zIndex: 1, overflow: 'hidden',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <img
                                src={yogaInstruction}
                                alt="Grupo de Yoga Noelia"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div className="about-content">
                        <span className="badge">Sobre Mí</span>
                        <h2 className="section-title">Tu guía en este camino</h2>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Soy Noelia, instructora con más de 10 años de experiencia, certificada en Pilates, Yoga Oncológico y múltiples estilos como Hatha, Kundalini, Vinyasa, Nidra, Yin Yoga y Restaurativo. Mi pasión es hacer del movimiento consciente una herramienta accesible para mejorar tu calidad de vida, ya sea en el estudio, tu hogar o tu oficina en Leganés, Getafe, Alcorcón y alrededores.
                        </p>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Creo firmemente que el bienestar no es un lujo, sino una necesidad. Mi enfoque combina la tradición del yoga con técnicas modernas de gestión del estrés y mindfulness.
                        </p>

                        <div className="stats-row" style={{ display: 'flex', gap: '3rem', marginTop: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '0', color: 'var(--primary-600)' }}>10+</h3>
                                <span style={{ textTransform: 'uppercase', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Años</span>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', marginBottom: '0', color: 'var(--primary-600)' }}>500+</h3>
                                <span style={{ textTransform: 'uppercase', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Alumnos</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
