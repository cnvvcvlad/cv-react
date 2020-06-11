import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêrets</h3>
            <ul>
                <li className="hobby"><i className="fas fa-running"></i><span>Course à pied</span></li>
                <li className="hobby"><i className="fas fa-bicycle"></i><span>Faire du vélo</span></li>
                <li className="hobby"><i className="fas fa-chess-pawn"></i><span>Les échecs</span></li>
                <li className="hobby"><i className="fas fa-table-tennis"></i><span>Ping pong</span></li>
                <li className="hobby"><i className="fas fa-laptop-code"></i><span>La veille informatique</span></li>
            </ul>
        </div>
    );
};

export default Hobbies;