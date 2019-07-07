import React, { Component } from 'react';
import Ball from './Ball'
  
function getWinNumbers() {
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];                // 마지막 숫자 1개 보너스숫자
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);   // 앞에서 6개 당첨숫자
    return [...winNumbers, bonusNumber];
  }
  
class Lotto extends Component {

    state = {
        winNumbers: getWinNumbers(),  // 6개 당첨숫자
        winBalls: [],
        bonus: null,                  // 1개 보너스숫자
        redo: false,
    };

    timeouts = [];

    runTimeouts = () => {
        const { winNumbers } = this.state;
        // 6개 당첨숫자 생성
        for (let i = 0; i < winNumbers.length - 1; i++) {
          this.timeouts[i] = setTimeout(() => {
            this.setState((prevState) => {
              return {
                winBalls: [...prevState.winBalls, winNumbers[i]],
              };
            });
          }, (i + 1) * 1000);
        }
        // 1개 보너스숫자 생성
        this.timeouts[6] = setTimeout(() => {
          this.setState({
            bonus: winNumbers[6],
            redo: true,
          });
        }, 7000);
      };

    componentDidMount = () => {
        const { winNumbers } = this.state;
        this.runTimeouts();
    };
      
    componentWillUnmount() {
        this.timeouts.forEach((v) => {
          clearTimeout(v);
        })
    }

    onClickRedo = () => {
        this.setState({
          winNumbers: getWinNumbers(),  // 당첨 숫자들
          winBalls: [],
          bonus: null,                  // 보너스 공
          redo: false,
        });
        this.timeouts = [];
        this.runTimeouts();
    };

    render() {
        const { winBalls, bonus, redo } = this.state;
        return (
            <>
                <div>당첨 숫자</div>
                <div id="결과창">
                { winBalls.map((v) => <Ball key={v} number={v} />)}
                </div>
                <div>보너스!</div>
                {bonus && <Ball key={bonus} number={bonus} />}
                {redo && <button onClick={this.onClickRedo}>한 번 더!</button>}
            </>
        )
    }
}

export default Lotto;