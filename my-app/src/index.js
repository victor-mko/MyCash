import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import './scss/reset-css.css';
import App from './App';
import AuthPage from './authorization/authoriz-page';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import thunk from 'redux-thunk';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';



const store = createStore(
    reducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render( 
    <Provider store = { store } >
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={AuthPage}/>
                <Route path="/app" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();