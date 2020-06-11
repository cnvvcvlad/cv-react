import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData'; // on importe l'objet portfolioData
import Project from './Project';
class ProjectList extends Component {
    state = {
        // cela représente les objets du fichier portfolioData du dossier src/data
        projects: portfolioData,

        // on crée une BDD
        radios: [
            { id: 1, value: "javascript" },
            { id: 2, value: "css" },
            { id: 3, value: "react" },
            { id: 4, value: "php" }
        ],

        selectedRadio: "javascript"
    };

    handleRadio = (event) => {
        // console.log(event.target.value);
        let radio = event.target.value;
        this.setState({ selectedRadio: radio });
    }

    render() {
        // c'est le portfolioData et le radio (destructuring)
        let { projects, radios, selectedRadio } = this.state;
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {/* affiche les radios */}
                    {
                        radios.map((radio) => {
                            return (
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        // la fonction va prendre en charge la selection d'un autre radio
                                        onChange={this.handleRadio} />

                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="projects">
                    {
                        // c'est le this.state
                        projects
                            // on trie les projets qui contient certains lanagges
                            .filter(item => item.languages.includes(selectedRadio))
                            .map(item => {
                                return (
                                    <Project
                                        key={item.id}
                                        item={item}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;