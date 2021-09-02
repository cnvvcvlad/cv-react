import React, { Component } from 'react';

class Project extends Component {
    state = {
        // on défini une variable qui va afficher ou cacher l'info
        showInfo: false
    }

    handleInfo = () => {
        // mis à jour du state (boolean)        
        this.setState({
            showInfo: !this.state.showInfo
        })
    }


    render() {
        // on fait le destructuring des données
        let { name, languagesIcons, source, info, picture } = this.props.item;

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon => <i className={icon} key={icon}></i>)}
                </div>                
                <a href={picture} title="Image plein ecran"><h3>{name}</h3></a>
                <img src={picture} alt="" onClick={this.handleInfo} />
                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>

                {/* on gere le pop-up */}
                {
                    // une facon d'ecrire un if showInfo est à true et du JSX , alors on affiche le JSX
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <a href={source} rel="noopener noreferrer" className="button" target="_blank">Code source</a>
                                    </div>
                                </div>

                                <p className="text">{info}</p>

                                <div className="button return" onClick={this.handleInfo}>Retourner sur la page</div>
                            </div>
                        </div>

                    )
                }

            </div>
        );
    }
}

export default Project;