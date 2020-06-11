import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/knowledges/Languages';
import Experience from '../components/knowledges/Experience';
import OtherSkills from '../components/knowledges/OtherSkills';
import Hobbies from '../components/knowledges/Hobbies';
import Diplome from '../components/knowledges/Diplome';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
            {/* C'est Knowledges ! */}
            <div className="knowledgesContent">
                <Languages />
                <Experience />
                <Diplome />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;