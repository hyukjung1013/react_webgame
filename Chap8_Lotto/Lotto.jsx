import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {

  // const [winNumbers, setWinNumbers] = useState(getWinNumbers());

  /* 
    문제점)
            useMemo()가 없으면 함수컴포넌트 전체가 재실행될 때마다 getWinNumber()가 호출된다.

    해결책)     
            useMemo, 메모이제이션, 두번째 배열 인자로 들어가는 값이 바뀌지 않는 이상
            함수를 다시 실행시키지 않고 기존 "리턴값"을 캐싱하여 사용한다.
  */

  const lottoNumbers = useMemo(() => getWinNumbers(), [/* */]);  
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);

  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  useEffect(() => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]);   // timeouts.current가 바뀌었을때만  useEffect()의 콜백을 수행한다.

  // 빈 배열이면 componentDidMount와 동일하다.
  // 배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

  useEffect(() => {
    console.log('로또 숫자를 생성합니다.');
  }, [winNumbers]);


  /*
        useCallback( .. )

        // 함수의 결과값이 아니라 함수 자체를 캐싱한다.

        // 문제점) 함수컴포넌트가 재실행될때마다 함수가 재생성된다.
        // useCallback()으로 감싸주면 함수컴포넌트가 재실행될때마다 함수가 재생성되지않고 캐싱된 함수를 사용한다.
   */
  const onClickRedo = useCallback(() => {
    console.log('onClickRedo');
    console.log(winNumbers);
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} onClick={onClickRedo} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};
export default Lotto; 