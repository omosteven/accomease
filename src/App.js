import React from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./containers/home/Home";

import {Register, Login, Recover } from "./containers/auth";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch> {/* Home */}
                    <Route exact path="/" component={Home} />
                    {/* Auth pages */}
                    <Route exact path="/auth/register/"
                        component={Register}/>

                    <Route exact path="/auth/login/"
                        component={Login}/>

                    <Route exact path="/auth/recover/"
                        component={Recover}/>

                </Switch>
            </Router>
        </div>
    );
};

export default App;
