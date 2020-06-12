import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import About from "../screens/About/About";
import Contact from "../screens/Contact/Contact";
import Header from "../Header/Header";
import WithLoader from "../WithLoader/WithLoader";
import EventPage from "../screens/event/EventPage";

class Router extends Component {
  render() {
    const HomeWithLoader = WithLoader(Home),
      AboutWithLoader = WithLoader(About),
      ContactWithLoader = WithLoader(Contact),
      EventWithLoader = WithLoader(EventPage);

    return (
      <div>
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeWithLoader} />
            <Route path="/about" component={AboutWithLoader} />
            <Route path="/contact" component={ContactWithLoader} />
            <Route path="/events" component={EventWithLoader} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Router;
