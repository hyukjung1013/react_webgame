import React, { useState } from 'react';
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

const NumberBaseball = () => {

    const [result, setResult] = useState('');
    const [input, setInput] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const onChangeInput = (e) => {
        setInput(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (input === answer.join('')) {
            setResult('Home run');
            setTries((prevTries) => {
                return [...prevTries, { try: input, result: 'Home Run!' }];
            });
            alert('게임을 다시 시작합니다.');
            setInput('');
            setAnswer(getNumbers());
            setTries([]);
        } else {
            const answerArray = input.split('').map( (v) => parseInt(v) );
            let strike = 0;
            let ball = 0;

            if (tries.length >= 9) {
                setResult(`10번 넘어서 실패했습니다. 답은 ${answer.join(',')} 입니다.`);
                alert('게임을 다시 시작합니다.');
                setInput('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i=0; i<4; i+=1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevTries) => {
                    return [...prevTries, { try: input, result: `${strike} 스트라이크, ${ball} 볼 입니다.`} ]
                });
                setInput('');
            }
        }
    }

    return <>  
        <h1>{result}</h1> 
        <form onSubmit={onSubmitForm}>
            <input type="number" maxLength={4} value={input} onChange={onChangeInput}/>
            <button type="submit">Submit</button>
        </form>
        <div>시도: { tries.length }</div>
        <ul>
            {tries.map( (value, index) => {
                return (
                    <Try tryInfo={value} />
                )
            })}
        </ul>
    </>
}
export default NumberBaseball;