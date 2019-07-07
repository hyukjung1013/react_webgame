import React, { useState, useRef, useEffect } from 'react';

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
  
const RSP = () => {

    const [result, setResult] = useState('');
    const [imgCoordinate, setImgCoordinate] = useState(rspCoordinates.rock);
    const [score, setScore] = useState(0);
    const interval = useRef();

    /*

        useEffect() is used to replace life cycle functions.
        useEffect()는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다.


        useEffect( () => { 
            ... 
        }, [state])         // 특정 state가 업데이트 될 때만 실행하고 싶을 때

    */

    useEffect(() => {     
        // componentDidMount, componentDidUpdate 역할
        interval.current = setInterval(changeHand, 100);
    
        // componentWillUnmount 역할
        return () => {     
          clearInterval(interval.current);
        }
      }, [imgCoordinate]);

    const changeHand = () => {
        if( imgCoordinate === rspCoordinates.rock ) {
            setImgCoordinate(rspCoordinates.scissor);
        } else if(imgCoordinate === rspCoordinates.scissor) {
            setImgCoordinate(rspCoordinates.paper);
        } else {
            setImgCoordinate(rspCoordinates.rock);
        }
    }

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoordinate)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('비겼습니다!');
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('졌습니다!');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 100);
        }, 3000);
    }

    return (
        <>  
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoordinate} 0` }} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('rock')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('scissor')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('paper')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    )
    
    
}
export default RSP;