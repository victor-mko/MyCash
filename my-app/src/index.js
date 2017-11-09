import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import './scss/reset-css.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import thunk from 'redux-thunk'; 



const store = createStore(
    reducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render( 
    <Provider store = { store } >
        <App />
    </Provider>,
    document.getElementById('root')
);


registerServiceWorker();