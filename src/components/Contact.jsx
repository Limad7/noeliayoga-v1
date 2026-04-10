import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import '../index.css';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '5rem 0', background: 'var(--pastel-bg)' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Contacta Conmigo</h2>
                    <p className="section-subtitle">¿Tienes dudas o quieres reservar una clase? Escríbeme.</p>
                </div>

                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>

                    <div className="contact-info glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Información Directa</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
                            <a href="mailto:japmantkaur@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: 'inherit', padding: '1rem', borderRadius: '1rem', transition: 'background 0.3s', cursor: 'pointer' }} className="hover:bg-purple-50">
                                <div style={{ background: 'var(--primary-100)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-700)' }}><Mail size={24} /></div>
                                <span style={{ fontSize: '1.125rem' }}>japmantkaur@gmail.com</span>
                            </a>
                            <a href="tel:+34633073841" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: 'inherit', padding: '1rem', borderRadius: '1rem', transition: 'background 0.3s', cursor: 'pointer' }} className="hover:bg-purple-50">
                                <div style={{ background: 'var(--primary-100)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-700)' }}><Phone size={24} /></div>
                                <span style={{ fontSize: '1.125rem' }}>+34 633 07 38 41</span>
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1rem' }}>
                                <div style={{ background: 'var(--primary-100)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-700)' }}><MapPin size={24} /></div>
                                <span style={{ fontSize: '1.125rem' }}>Madrid, España</span>
                            </div>
                            <a href="https://instagram.com/japmant" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', textDecoration: 'none', color: 'inherit', padding: '1rem', borderRadius: '1rem', transition: 'background 0.3s', cursor: 'pointer' }} className="hover:bg-purple-50">
                                <div style={{ background: 'var(--primary-100)', padding: '1rem', borderRadius: '50%', color: 'var(--primary-700)' }}><Instagram size={24} /></div>
                                <span style={{ fontSize: '1.125rem' }}>@japmant</span>
                            </a>
                        </div>
                    </div>

                    <div className="contact-map glass-card" style={{ padding: '1rem', height: '100%', minHeight: '400px', display: 'flex', borderRadius: '1.5rem', overflow: 'hidden' }}>
                        <iframe 
                            src="https://maps.google.com/maps?q=Leganés,%20Madrid&t=&z=11&ie=UTF8&iwloc=&output=embed" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, borderRadius: '1rem' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Leganés"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
