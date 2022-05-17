import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Homie from "./pages/homie";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Navbar from "./components/navbar";
import Unistyle from "./unistyle";
import ScrollToTop from "./components/ScrollToTop";

function Website() {
    return (
        <HashRouter>
            <Unistyle />
            <Navbar />
            <ScrollToTop />
            <Switch>
                <Redirect path="/" to="/home" exact component={Homie} />
                <Route path="/home" exact component={Homie} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/projects" exact component={Projects} />
            </Switch>
        </HashRouter>
    );
}

export default Website;
