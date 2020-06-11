import React from 'react';

const Diplome = () => {
    return (
        <div className="diplome">
            <h3>Diplômes</h3>
            <div className="dip-1">
                <h4>Développeur Web et Web Mobile</h4>
                <h5>2019</h5>
                <p>Titre classé au niveau 5, dans le(s) domaine(s) d'activité 326t et au niveau 5 du cadre européen des certifications. </p>
            </div>
            <div className="dip-2">
                <h4>Diplôme de licence de l’Université Technique de Moldavie</h4>
                <h5>2007-2011</h5>
                <p>Certification francophone de l'AUF, option "Technologies alimentaires"</p>
            </div>
            <div className="dip-2">
                <h4>Diplôme Nationale de Viticulture et Vinification de Chisinau</h4>
                <h5>2003-2007</h5>
                <p>option "Oenologie"</p>
            </div>
        </div>
    );
};

export default Diplome;