import React from 'react';
import Navigation from '../components/Navigation';
import Hello from '../components/Hello';
import Counter from '../components/Counter';

const Home = () => {
    return (
        // <div>
        //     Home c'est ici
        // </div>

        <div className="home">
            {/* on appele la composante Navigation  */}
            <Navigation></Navigation>
            <div className="homeContent">
                <div className="content">
                    <Counter></Counter>
                    <Hello></Hello>
                    <h1>Ciobanu Vladislav</h1>
                    <h2>Développeur web et web mobile</h2>
                    <div className="pdf">
                        <a className="fr" href="./media/CV.pdf" target="_blank" download>Télécharger CV(fr)</a>
                        <a className="eng" href="./media/resume.pdf" target="_blank" download>Resume(eng)</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;