
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; que pasa capo¿tdo bien?</p>
                <div className="footer-links">
                    <a href="#privacy">Privacidad</a>
                    <a href="#terms">Términos de Uso</a>
                    <a href="#contact">Contacto</a>
                </div>
                <div className="footer-links">
                    <a href="#privacy">twiter</a>
                    <a href="#terms">instagram</a>
                    <a href="#contact">Facebook</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;