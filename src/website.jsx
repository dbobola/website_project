import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Homie from "./pages/homie";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Sidebar from "./components/sidebar";
import Unistyle from "./unistyle";
import ScrollToTop from "./components/ScrollToTop";

function Website() {
    return (
        <HashRouter>
            <Unistyle />
            <Sidebar />
            <ScrollToTop />
            <Switch>
                <Redirect path="/" to="/home" exact component={Homie} />
                <Route path="/home" exact component={Homie} />
                <Route path="/about" exact component={About} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/projects" exact component={Projects} />
            </Switch>
        </HashRouter>
    );
}

export default Website;
