import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        // retourne une seule div parente 
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Nogent sur Marne</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0783554817">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié !'); }}>0783554817</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="cnvvc_vlad@yahoo.fr">
                                <span className="clickInput" onClick={() => { alert('E-mail copié !'); }}>cnvvc_vlad@yahoo.fr</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/ciobanu-vladislav-88025231/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/cnvvcvlad" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i></a>
                        <a href="https://twitter.com/CiobanuVladisl1/" target="_blank" rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/cioban.vladislav/" target="_blank" rel="noopener noreferrer">
                            <h4>Facebook</h4>
                            <i className="fab fa-facebook"></i></a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;