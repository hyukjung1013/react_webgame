import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import NumberBaseball from './NumberBaseball'
import Test from './Test'

// const Hot = hot(NumberBaseball);
const Hot = hot(Test);

ReactDOM.render(<Hot />, document.querySelector('#root'))