import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className="{props.className}">
            <h3>{props.title}</h3>
            <div className="years">
                <span>Années d'expérience</span>
                <span>1 an</span>
                <span>2 ans</span>
                <span>3 ans</span>
            </div>

            <div>
                {props.languages.map((item) => {
                    let xpYears = 3.1;
                    // valeur en pourcentage pour l'utiliser ensuite à styliser notre barre de progression
                    let progressBar = item.xp / xpYears * 100 + '%';

                    // affichage individuel pour chaque barre de progression
                    return (
                        <div key={item.id} className="languagesList">
                            <li>{item.value}</li>
                            {/* ajout du style avec double accolade */}
                            <div className="progressBar" style={{ width: progressBar }}></div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default ProgressBar;