import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i=0; i<4; i+=1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    console.log('ANSWER: ', array)
    return array;
}

class NumberBaseball extends Component {

    state = {
        result: '',
        input: '',
        answer: getNumbers(),   // ex) [1, 3, 5, 7]
        tries: [],
    }

    onChangeInput = (e) => {
        this.setState({
            input: e.target.value,
        });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.input === this.state.answer.join('')) {
            this.setState({
                result: 'Home Run.',
                // Must not use push(). 
                // Use ... operation.
                tries: [...this.state.tries, { try: this.state.input, result: 'Home Run!' }]  
            });
            alert('게임을 다시 시작합니다.');
            this.setState({
                input: '',
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = this.state.input.split('').map( (v) => parseInt(v) );
            let strike = 0;
            let ball = 0;

            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 넘어서 실패했습니다. 답은 ${this.state.answer.join(',')} 입니다.`
                })
                alert('게임을 다시 시작합니다.');
                this.setState({
                    input: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i=0; i<4; i+=1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, { try: this.state.input, result: `${strike} 스트라이크, ${ball} 볼 입니다.`} ]
                });
            }
        }
    }

    render() {
        return <>  
            <h1>{this.state.result}</h1> 
            <form onSubmit={this.onSubmitForm}>
                <input type="number" maxLength={4} value={this.state.input} onChange={this.onChangeInput}/>
                <button type="submit">Submit</button>
            </form>
            <div>시도: { this.state.tries.length }</div>
            <ul>
                {this.state.tries.map( (value, index) => {
                    return (
                        <Try key={value.try} try={value.try} result={value.result} />
                    )
                })}
            </ul>
        </>
    }
}
export default NumberBaseball;