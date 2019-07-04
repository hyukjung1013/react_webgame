import React, { Component } from 'react';

class Try extends Component {

    render() {
        return (
            <>
                <li><b>{this.props.i}</b> {this.props.v}</li>
            </>
        )
    }
}

export default Try;