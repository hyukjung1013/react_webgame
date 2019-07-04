import React, { Component } from 'react';
import Try from './Try';

class NumberBaseball extends Component {

    constructor(props) {
        super(props);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    state = {
        value: '',
    }

    fruits = [
        { fruit: 'apple', color: 'red'}, 
        { fruit: 'banana', color: 'yellow'}, 
        { fruit: 'orange', color: 'orange'}, 
        { fruit: 'melon', color: 'green'}, 
    ];
    
    onSubmitForm() {}

    onChangeInput = () => {}

    render() {
        return <>
            <form onSubmit={this.onSubmitForm}>
                <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
            </form>
            <ul>
                {this.fruits.map( (element, index) => {
                    return (
                        <ul>
                            <Try v={element.fruit} i={index}/>
                        </ul>
                    )
                })}
            </ul>
        </>
    }
}
export default NumberBaseball;