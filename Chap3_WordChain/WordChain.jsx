const React = require('react');
const { useState, useRef } = React;

const WordChain = () => {

    const [word, setWord] = useState('시작');
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const onChangeInput = (e) => {
        setInput(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if ( word[word.length-1] === input[0]) {
            setResult('Correct!!');
            setWord(input);
            setInput('');
            inputRef.current.focus();
        } else {
            setResult('Incorrect!!');
            setInput('');
            inputRef.current.focus();
        }
    }

    const inputRef = useRef(null);
    
    return <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
            <input ref={inputRef} value={input} onChange={onChangeInput} />
            <button>입력</button>
        </form>
    </>
}
module.exports = WordChain;