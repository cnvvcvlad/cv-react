// class component skeleton
import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Test;

// class component skeleton with react - redux connect
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Test extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Test);

import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Test extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Test);