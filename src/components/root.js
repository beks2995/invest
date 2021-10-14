import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "./main/main";

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={() => <Main/>} />
            </Switch>
        </BrowserRouter>
    );
};

export default Root;