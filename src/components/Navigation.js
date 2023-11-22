import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        /* retourne une div parent seulement */
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    {/* on recupere l'image du dossier public */}
                    <a href="./media/ma_photo.png"><img width="150" height="160" src="./media/ma_photo.png" alt="ma_photo" /></a>
                    <h3>Ciobanu Vladislav</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        {/* on injecte la className que quand c'est active (on applique du style, couleurs, etc...)  */}
                        <NavLink exact to="/home" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        {/* on injecte la className que quand c'est active (on applique du style, couleurs, etc...)  */}
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li><li>
                        {/* on injecte la className que quand c'est active (on applique du style, couleurs, etc...)  */}
                        <NavLink exact to="/portfolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li><li>
                        {/* on injecte la className que quand c'est active (on applique du style, couleurs, etc...)  */}
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/ciobanu-vladislav-88025231/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/cnvvcvlad" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li><li>
                        <a href="https://twitter.com/CiobanuVladisl1/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li><li>
                        <a href="https://www.facebook.com/cioban.vladislav/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>CVIDEV - 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;