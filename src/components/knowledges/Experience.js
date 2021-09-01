import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expérience</h3>
            <div className="exp-1">
                <h4>Développeur web PHP Symfony</h4>
                <h5>2021</h5>
                <p>Durant ma formation chez <a href="https://simplon.co/" target="_blank" rel="noopener noreferrer"><i>Simplon</i></a>, j’ai développé plusieurs applications web coté BackEnd en PHP, avec le framework Symfony.</p>
            </div>
            <div className="exp-2">
                <h4>Stagiaire développement web</h4>
                <h5>2019</h5>
                <p>C’est dans le cadre de ma formation à l’<a href="https://www.afpa.fr/centre/centre-de-creteil" target="_blank" rel="noopener noreferrer"><i>AFPA Creteil</i></a>  et durant la période de stage, j’ai développé plusieurs applications web, en applicant mes compétences en HTML, CSS, JavaScript et PHP.</p>
            </div>
            <div className="exp-3">
                <h4>Serveur</h4>
                <h5>2015-2018</h5>
                <p>Mon premier job à Paris a été dans la restauration.</p>
            </div>
            <div className="exp-4">
                <h4>Consultant télémarketing - <a href="https://www.gpg-callcenter.com/" className="jobLink" target="_blank" rel="noopener noreferrer"> GPGConsulting(Argus de la Presse), Chisinau</a></h4>
                <h5>2014-2015</h5>
                <p>Fournir des services télémarketing, ainsi que la saisie de données et toute sorte de services d'externalisation offshore</p>
            </div>
        </div>
    );
};

export default Experience;