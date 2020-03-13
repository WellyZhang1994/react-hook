import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxThunk from 'redux-thunk';
import reducer from "./reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root')
 );

