import React from 'react';
import '../index.css';

const Privacidad = () => {
    return (
        <section className="legal-section" style={{ padding: '8rem 0 4rem', minHeight: '80vh', backgroundColor: 'var(--pastel-bg)' }}>
            <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '1rem', boxShadow: 'var(--shadow-md)' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary-900)' }}>Política de Privacidad</h1>
                
                <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                    <p>En Noelia Yoga estamos comprometidos con la privacidad y transparencia frente a nuestros usuarios. De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD), informamos de lo siguiente:</p>
                    
                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-800)', marginTop: '2rem', marginBottom: '1rem' }}>1. No recopilación de datos de carácter personal</h2>
                    <p>Este sitio web tiene un fin estrictamente informativo. <strong>No disponemos de formularios de contacto, registros de usuarios ni sistemas de suscripción.</strong> Por lo tanto, no recabamos, almacenamos ni procesamos ningún dato de carácter personal de las personas que nos visitan.</p>

                    <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-800)', marginTop: '2rem', marginBottom: '1rem' }}>2. Ejercicio de Derechos</h2>
                    <p>Dado que no disponemos de bases de datos de usuarios ni tratamos datos personales, no procede el ejercicio de los derechos de Acceso, Rectificación, Supresión, Oposición, Limitación y Portabilidad (Derechos ARCO). No obstante, para cualquier consulta general o aclaración, el Responsable del sitio es Noelia Yoga, puedes contactarnos en japmantkaur@gmail.com.</p>
                </div>
            </div>
        </section>
    );
};

export default Privacidad;
