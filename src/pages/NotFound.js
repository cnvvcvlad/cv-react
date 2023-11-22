// Page 404
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        // <div>
        //     NotFound !
        // </div>

        <div className="notFound">
            <div className="notFOundContent">
                <h3>Désolé cette page n'existe pas !</h3>
                <NavLink exact to="/home">
                    <i className="fas fa-home"></i>
                    <span>Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;