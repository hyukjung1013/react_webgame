import React, { Component } from 'react';

class ReactionVelocity extends Component {

    state = {
        state: 'waiting',
        message: 'Click to start.',
        result: [],
    }

    onClickScreen = () => {
        const { state, message, result } = this.state;
        if ( state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요',
            });
            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭',
                })
            }, Math.floor(Math.random() * 1000) + 2000);
            this.startTime = new Date();
        } else if (state === 'ready') {
            clearTimeout(this.timeout);
            this.setState({
                message: '이런, 성급하시군요. 초록색일 때 클릭하세요.',
                state: 'waiting',
            });
        } else if (state === 'now') {
            this.endTime = new Date();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    result: [...prevState.result, this.endTime - this.startTime],
                    message: '클릭해서 시작하세요.'}
            });
        }
    }

    onReset = () => {
        this.setState({
            result: [],
        });
    };

    render() {
        return <>  
            <div id="screen" className={this.state.state} onClick={this.onClickScreen}>
                {this.state.message}
            </div>
            {
                (() => {
                    if(this.state.result.length === 0) {
                        return null
                    } else {
                        return <div>평균 시간: {this.state.result.reduce((a, c) => { a + c }) / this.state.result.length }ms</div>
                    }
                })()
            }
            <button onClick={this.onReset}>Reset</button>
        </>
    }
}

export default ReactionVelocity;