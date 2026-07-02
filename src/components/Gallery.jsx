import React from 'react';
import yogaNidra from '../assets/yoga-nidra-session.png';
import '../index.css';

const galleryItems = [
    {
        id: 1,
        image: yogaNidra,
        title: "Yoga Nidra",
        description: "Sesión de relajación profunda guiada"
    }
];

const Gallery = () => {
    return (
        <section className="gallery-section" id="galeria" style={{ padding: '5rem 0', background: 'var(--pastel-bg, #f8f4ff)' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="badge">Galería</span>
                    <h2 className="section-title">Momentos de Conexión</h2>
                    <p className="section-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Un recorrido visual por las experiencias y sensaciones que se viven en cada sesión.
                    </p>
                </div>

                <div className="gallery-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item animate-fade-in"
                            style={{
                                position: 'relative',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                aspectRatio: '1 / 1',
                                cursor: 'pointer',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                            <div className="gallery-overlay" style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                padding: '2rem 1.5rem 1.5rem',
                                color: 'white'
                            }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', fontWeight: 600 }}>
                                    {item.title}
                                </h3>
                                <p style={{ fontSize: '0.9rem', opacity: 0.9, margin: 0 }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
