import React from 'react';

const Hello = () => {
    var time = new Date();

    if (time.getHours() < 12) {
        return <h1>Bonne journée !</h1>;
    }
    return <h1>Bonne fin de jornée !</h1>;

};

export default Hello;