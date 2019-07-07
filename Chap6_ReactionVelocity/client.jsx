import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import ReactionVelocity from './ReactionVelocity'

const Hot = hot(ReactionVelocity);

ReactDOM.render(<Hot />, document.querySelector('#root'))