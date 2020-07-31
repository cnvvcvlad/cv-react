import React from 'react';

const Hello = () => {
    var time = new Date();
    var message = "Bonne fin de journée !";

    if (time.getHours() < 12) {
        message = "Bonne journée !";
    }

    return (
        <div>
            <h3 className="textContent">{message}</h3>
        </div>
    );

};

export default Hello;