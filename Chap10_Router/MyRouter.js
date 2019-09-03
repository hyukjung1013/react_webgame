import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import ThirdComponent from './components/ThirdComponent'

class MyRouter extends Component {

    render() {
        return (
            <BrowserRouter>
                <header>
                    <Link to="/first">첫번째 컴포넌트</Link><br />
                    <Link to="/second">두번째 컴포넌트</Link><br />
                    <Link to="/third">세번째 컴포넌트</Link><br />
                </header> 
                <div>
                    <Route path="/first" component={FirstComponent}></Route>
                    <Route path="/second" component={SecondComponent}></Route>
                    <Route path="/third" component={ThirdComponent}></Route>
                </div>
            </BrowserRouter>
        );
    };
}

export default MyRouter;