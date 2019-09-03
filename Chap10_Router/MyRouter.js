import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ComponentMatcher from './components/ComponentMatcher'

class MyRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                <header>
					<Link to="/app/first">첫번째 컴포넌트</Link><br />
					<Link to="/app/second">두번째 컴포넌트</Link><br />
					<Link to="/app/third">세번째 컴포넌트</Link><br />
                </header> 
                <div>
                    <Route path="/app/:name" component={ComponentMatcher}></Route>
                </div>
            </BrowserRouter>
        );
    };
}

export default MyRouter;