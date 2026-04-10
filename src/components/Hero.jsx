import React from 'react';
import yogaMeditando from '../assets/YogaMeditando.jpg';
import '../index.css';

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            {/* Background Elements */}
            <div className="bg-gradient-overlay" />
            <div className="floating-shape shape-1" />
            <div className="floating-shape shape-2" />

            <div className="container hero-container">
                <div className="hero-content animate-fade-in-up">
                    <span className="badge">Bienestar Integral</span>
                    <h1 className="hero-title">
                        Yoga para tu <span className="text-gradient">Vida</span> y tu <span className="text-gradient">Empresa</span>
                    </h1>
                    <p className="hero-subtitle">
                        Descubre el equilibrio perfecto entre cuerpo y mente en Leganés y toda la zona sur de Madrid. Clases personalizadas, retiros y bienestar corporativo diseñados para ti.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn-primary btn-lg" style={{ textDecoration: 'none' }}>Empezar Ahora</a>
                        <a href="#services" className="btn-secondary btn-lg" style={{ textDecoration: 'none' }}>Ver Servicios</a>
                    </div>
                </div>

                <div className="hero-visual animate-float-slow">
                    <div className="visual-card">
                        <div className="visual-card-bg" />
                        <div className="visual-card-content glass-card p-0 overflow-hidden border-2 border-white/50">
                            <img
                                src={yogaMeditando}
                                alt="Clases de Yoga en Leganés impartidas por Noelia"
                                className="w-full h-full object-cover"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>            </div>
        </section>
    );
};

export default Hero;
