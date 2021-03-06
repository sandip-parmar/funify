import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import myStore from "./redux/store";
import thunk from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(myStore, applyMiddleware(thunk));

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette:{
        primary: {
            main: '#ED4E6B'
        },
        secondary:{
            main: '#ED4E6B'
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <AppRoutes key="routes"/>
        </MuiThemeProvider>
    </Provider>    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
