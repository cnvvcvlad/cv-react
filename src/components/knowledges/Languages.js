import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    //on ajoute un state pour stocker des choses
    state = {
        languages: [
            { id: 1, value: "HTML", xp: 2.5 },
            { id: 2, value: "CSS", xp: 2.4 },
            { id: 3, value: "JavaScript", xp: 2.0 },
            { id: 4, value: "PHP", xp: 2.2 },
            { id: 5, value: "C/C++", xp: 1.5 },
        ],
        frameworks: [
            { id: 1, value: "React", xp: 1.2 },
            { id: 2, value: "Bootstrap", xp: 2.0 },
            { id: 3, value: "Symfony", xp: 2.2 },
            { id: 4, value: "SASS", xp: 1.4 },
            { id: 5, value: "SQL", xp: 2.0 }

        ]
    }
    render() {
        // on défini les deux tableaux de l'objet state, on pointe les données. Cela evite d'ecrire this.state.language
        let { languages, frameworks } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    // dans la ProgressBar on envoie une props languages
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworkDisplay"
                    title="frameworks and libraries"
                />
            </div>
        );
    }
}

export default Languages;