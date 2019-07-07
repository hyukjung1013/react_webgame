import React, { Component } from 'react';

const rspCoordinates = {
    rock: '0',
    scissor: '-142px',
    paper: '-284px',
}

const scores = {
    scissor: 1,
    rock: 0,
    paper: -1,
}

const computerChoice = (imgCoordinate) => {
    return Object.entries(rspCoordinates).find(function(v) {
      return v[1] === imgCoordinate;
    })[0];
  };
  
class RSP extends Component {

    state = {
        result: '',
        imgCoordinate: '0',
        score: 0,
    };

    interval;

    changeHand = () => {
        const { imgCoordinate } = this.state;
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
    }

    componentDidMount() {
        this.interval = setInterval(this.changeHand, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onClickBtn = (choice) => {
        const { imgCoordinate } = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoordinate)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
          this.setState({
            result: '비겼습니다!',
          });
        } else if ([-1, 2].includes(diff)) {
          this.setState((prevState) => {
            return {
              result: '이겼습니다!',
              score: prevState.score + 1,
            };
          });
        } else {
          this.setState((prevState) => {
            return {
              result: '졌습니다!',
              score: prevState.score - 1,
            };
          });
        }
        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 100);
        }, 3000);
    }

    render() {
        const { result, score, imgCoordinate } = this.state;
        return <>  
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoordinate} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={() => this.onClickBtn('rock')}>바위</button>
                <button id="scissor" className="btn" onClick={() => this.onClickBtn('scissor')}>가위</button>
                <button id="paper" className="btn" onClick={() => this.onClickBtn('paper')}>보</button>
             </div>
             <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    }
}
export default RSP;