import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import reducer from './redux/reducer';
import Home from "./components/home/home.js";
import About from "./components/about/about.js";
import Signin from "./components/signin/signin.js"
import Signup from "./components/signup/signup.js"
import Navbar from "./components/navbar/navbar.js";
import history from './history';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('index')
);
