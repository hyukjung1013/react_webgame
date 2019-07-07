import React, { Component } from 'react';

const rspCoordinates = {
    rock: '0',
    scissor: '-142px',
    paper: '-284px',
}

const scores = {
    win: 1,
    draw: 0,
    lose: -1,
}

class RSP extends Component {

    state = {
        result: '',
        imgCoordinate: '0',
        score: 0,
    };

    interval;

    componentDidMount() {
        // Set Asynchronous process.
        this.interval = setInterval(() => {
            const {imgCoordinate} = this.state;
            if( imgCoordinate === rspCoordinates.rock ) {
                this.setState({
                    imgCoordinate: rspCoordinates.scissor
                })
            } else if(imgCoordinate === rspCoordinates.scissor) {
                this.setState({
                    imgCoordinate: rspCoordinates.paper
                })
            } else {
                this.setState({
                    imgCoordinate: rspCoordinates.rock
                })
            }
        }, 100);
    }

    componentDidUpdate(prevProps, prevState) {
        // After DOM has been rendered again,
    }

    componentWillUnmount() {
        // Terminate asynchronous job. 
        clearInterval(this.interval);
    }

    onClickBtn = (choice) => {

    }

    render() {
        const { result, score, imgCoordinate } = this.state;
        return <>  
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoordinate} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
             </div>
             <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    }
}

export default RSP;