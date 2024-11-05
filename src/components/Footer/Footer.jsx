import {Link} from 'react-router-dom';
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; que pasa capo¿tdo bien?</p>
                <div className="footer-links">
                    <a href="#privacy">Privacidad</a>
                    <Link to="/Terms"
                          href="#terminos de uso">Terminos de uso</Link>
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