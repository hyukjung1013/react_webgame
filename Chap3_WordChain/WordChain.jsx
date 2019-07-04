const React = require('react');
const { Component } = React;

class WordChain extends Component {

    state = {
        word: '시작',
        input: '',
        result: '',
    };

    onChangeInput = (e) => {
        this.setState( { input: e.target.value } );
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if ( this.state.word[ this.state.word.length -1 ] === this.state.input[0]) {
            this.setState({
                result: 'Correct',
                word: this.state.input,
                input: '',
            });
            this.inputRef.focus();
        } else {
            this.setState({
                result: 'Incorrect',
                input: '',
            });
            this.inputRef.focus();
        }
    }

    inputText;
    inputRef = (c) => {
        this.inputText = c;
    };

    render() {
        return <>
            <div>{this.state.word}</div>
            <form onSubmit={this.onSubmitForm}>
                <input ref={this.inputRef} value={this.state.input} onChange={this.onChangeInput} />
                <button>입력</button>
            </form>
            <div>{this.state.result}</div>
        </>
    }
}
module.exports = WordChain;