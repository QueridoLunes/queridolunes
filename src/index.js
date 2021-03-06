import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./store/reducers";
import reportWebVitals from "./reportWebVitals";

import {Router} from "react-router";
import history from "./utils/history";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
