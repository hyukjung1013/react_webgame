import React, { Component } from 'react';

class NumberBaseball extends Component {

    render() {
        return <>   
            <ul>
                {['orange', 'apple', 'banana', 'melon', 'tomato'].map( (element, index) => {
                    return (
                        <li key={element} >({index}) {element}</li>
                        // React does not recommend using indexes for keys.
                    )
                })}
            </ul>
        </>
    }
}
export default NumberBaseball;