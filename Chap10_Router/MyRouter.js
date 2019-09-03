import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ComponentMatcher from './components/ComponentMatcher'
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

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
                    <Switch>
                        <Route path="/app/:name" component={FirstComponent}></Route>
                        <Route path="/app/first" component={ComponentMatcher}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    };
}

export default MyRouter;
