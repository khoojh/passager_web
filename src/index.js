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
import Navbar from "./components/navbar/navbar.js";
import history from './history';

const store = createStore(reducer, applyMiddleware(thunk, logger));

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('index')
// );

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('index')
);
