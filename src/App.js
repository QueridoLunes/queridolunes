import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";

const App = () => {

    return (
        //eslint-disable-next-line no-undef
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
