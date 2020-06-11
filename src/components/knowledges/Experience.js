import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expérience</h3>
            <div className="exp-1">
                <h4>Stagiaire développement web</h4>
                <h5>2019</h5>
                <p>C’est dans le cadre de ma formation à l’AFPA Creteil et durant  la période de stage, j’ai développé plusieurs applications web, qui sont présentées dans le portfolio.</p>
            </div>

            <div className="exp-2">
                <h4>Serveur</h4>
                <h5>2015-2018</h5>
                <p>Mon premier job à Paris a été dans la restauration.</p>
            </div>
            <div className="exp-3">
                <h4>Consultant télémarketing - <a href="https://www.gpg-callcenter.com/" className="jobLink" target="_blank" rel="noopener noreferrer"> GPGConsulting(Argus de la Presse), Chisinau</a></h4>
                <h5>2014-2015</h5>
                <p>C'est un centre de contacts multilingues, qui fourni des services télémarketing, services de développement de logiciels, ainsi que la saisie de données, BPO, KPO, site d'animation et de modération, et de toute sorte de services d'externalisation offshore</p>
            </div>
        </div>
    );
};

export default Experience;