import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres Compétences</h3>
            <div className="list">
                <ul>
                    <li><i className="fas fa-check-square"></i>Anglais - intermédiare</li>
                    <li><i className="fas fa-check-square"></i>Roumain – maternelle</li>
                    <li><i className="fas fa-check-square"></i>Russe - bilingue</li>
                    <li><i className="fas fa-check-square"></i>Maquetter une application</li>
                </ul>
                {/* <ul>
                    <li><i className="fas fa-check-square"></i>Figma</li>
                    <li><i className="fas fa-check-square"></i>UI/UX Design</li>
                    <li><i className="fas fa-check-square"></i>Photoshop</li>
                    <li><i className="fas fa-check-square"></i>Montage Vidéo</li>
                </ul> */}
            </div>
        </div>
    );
};

export default OtherSkills;