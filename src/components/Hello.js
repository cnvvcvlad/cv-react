import React from 'react';

const Hello = () => {
    var time = new Date();
    var message = "Bonne fin de journée !";

    if (time.getHours() < 12) {
        message = "Bonne journée !";
    }

    return (
        <div>
            <div className={'row text-center'}>
                <span className="fas fa-spin fa-spinner fa-4x"></span>
            </div>
            <span className="textContent">Il y a 0 viste sur le site</span>
            <h3 className="textContent">{message}</h3>
        </div>
    );

};

export default Hello;