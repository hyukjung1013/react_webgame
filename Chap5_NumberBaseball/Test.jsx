import React, { Component } from 'react';

class Test extends Component {
    state = {
        counter: 0,
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true;    // Rendering
        } 
        return false;       // No rendering
    }

    onClick = () => {
        this.setState({});  
        // No changes but re-rendered.
        // So 'shouldComponentUpdate()' was added.
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default Test; 