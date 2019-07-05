import React, { PureComponent } from 'react';

class Test extends PureComponent {
    state = {
        counter: 0,
    };

    // 'PureComponent' performs 'shouldComponentUpdate()' itself.
    // But it has problems with re-rendering 
    // when 'state' contains object, array, any other complex structure.

    onClick = () => {
        this.setState({});  
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