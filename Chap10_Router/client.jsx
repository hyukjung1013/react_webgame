import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import MyRouter from './MyRouter'

const Hot = hot(MyRouter);

ReactDOM.render(<Hot />, document.querySelector('#root'))