import React from 'react';
import Navigation from '../components/Navigation';
import Hello from '../components/Hello';

const Home = () => {
    return (
        // <div>
        //     Home c'est ici
        // </div>

        <div className="home">
            {/* on appele la composante Navigation  */}
            <Navigation></Navigation>
            <div className="homeContent">
                <Hello></Hello>
                <div className="content">
                    <h1>Ciobanu Vladislav</h1>
                    <h2>Développeur web et web mobile</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank" download>Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;