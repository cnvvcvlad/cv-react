import React, { Component } from 'react';
import countapi from 'countapi-js';

class Counter extends Component {
    constructor() {
        super();
        this.state = { vues: [] }
    }

    componentDidMount() {
        this.getVues();
    }

    getVues() {
        countapi.visits('global').then((result) => {
            const vues = result.value;
            this.setState({ vues });
        });
    }
    render() {
        return (
            <div>
                <div className={'row text-center'}>
                    <span className="fas fa-spin fa-atom fa-4x"></span>
                </div>
                < span className="textContent counter">Il y a {this.state.vues} visites sur le site</span>
            </div >
        );
    }
}

export default Counter;