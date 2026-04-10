import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logocompletonew.png';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="/" className="logo flex items-center gap-2 group">
                    {/* User Uploaded Logo (logocompletonew.png) */}
                    <div className="logo-wrapper">
                        <img
                            src={logoImg}
                            alt="Noelia Yoga"
                            className="h-full w-auto object-contain theme-filter"
                        />
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <a href="/#services" className="nav-link">Servicios</a>
                    <a href="/#about" className="nav-link">Sobre Mí</a>
                    <a href="/#contact" className="nav-link">Contacto</a>
                    <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                        Reserva Ahora
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle desktop-hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <a href="/#services" className="nav-link" onClick={() => setIsOpen(false)}>Servicios</a>
                <a href="/#about" className="nav-link" onClick={() => setIsOpen(false)}>Sobre Mí</a>
                <a href="/#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contacto</a>
                <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
                    Reserva Ahora
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
