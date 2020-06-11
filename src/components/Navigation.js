import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        /* retourne une div parent seulement */
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    {/* on recupere l'image du dossier public */}
                    <img width="150" height="150" src="./media/ma_photo.png" alt="ma_photo" />
                    <h3>Ciobanu Vladislav</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        {/* on injecte la className que quand c'est active (on applique du style, couleurs, etc...)  */}
                        <NavLink exact to="/" activeClassName="navActive">
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
                        <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li><li>
                        <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li><li>
                        <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>CVIDEV - 2020</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;