import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Homie from "./pages/homie";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Unistyle from "./unistyle";
import Navstyle from "./navstyle";

function Website() {
    return (
        <HashRouter>
            <Unistyle />
            <Navstyle />
            <Navbar />
            <Switch>
                <Redirect path="/" to="/home" exact component={Homie} />
                <Route path="/home" exact component={Homie} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
        </HashRouter>
    );
}

export default Website;
