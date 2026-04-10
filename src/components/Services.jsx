import React from 'react';
import yogaParticulares from '../assets/yogaparticulares.png';
import yogaEmpresas from '../assets/yogaempresas.jpg';
import retirosTalleres from '../assets/retiros-talleres.jpg';
import '../index.css';

const services = [
    {
        id: 1,
        title: "Clases Particulares",
        description: "Sesiones 1 a 1 totalmente personalizadas en tu domicilio en Leganés o en nuestro espacio, adaptadas a ti.",
        image: yogaParticulares,
        tags: ["Personalizado", "Flexibilidad", "Atención Plena"]
    },
    {
        id: 2,
        title: "Yoga para Empresas",
        description: "Programas de bienestar corporativo en oficinas de Leganés, Getafe y Madrid Sur para reducir el estrés.",
        image: yogaEmpresas,
        tags: ["Team Building", "Salud", "Productividad"]
    },
    {
        id: 3,
        title: "Retiros y Talleres",
        description: "Experiencias inmersivas de fin de semana para desconectar de la rutina y reconectar contigo.",
        image: retirosTalleres,
        tags: ["Naturaleza", "Conexión", "Intensivo"]
    },

];

const Services = () => {
    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nuestros Servicios</h2>
                    <p className="section-subtitle">Explora las diferentes formas en las que podemos trabajar juntos para mejorar tu bienestar.</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div className="flip-card" key={service.id}>
                            <div className="flip-card-inner">
                                {/* Front */}
                                <div className="flip-card-front">
                                    <div className="service-image-placeholder p-0 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <span className="service-title-front">
                                            {service.title}
                                        </span>
                                    </div>
                                </div>

                                {/* Back */}
                                <div className="flip-card-back">
                                    <div className="glass-back">
                                        <h3 className="service-title-back">{service.title}</h3>
                                        <p className="service-desc">{service.description}</p>
                                        <div className="tags">
                                            {service.tags.map(tag => (
                                                <span className="tag" key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
