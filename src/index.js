import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from "@material-ui/core";
import myStore from "./redux/store";
import thunk from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(myStore, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <AppRoutes />
        </MuiThemeProvider>
    </Provider>    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
