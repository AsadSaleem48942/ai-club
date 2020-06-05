import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import About from "../screens/About/About";
import Contact from "../screens/Contact/Contact";
import Blogs from "../screens/Blogs/BlogsList";
import Header from "../Header/Header";
import WithLoader from "../WithLoader/WithLoader";

class Router extends Component {
  render() {
    const HomeWithLoader = WithLoader(Home),
      AboutWithLoader = WithLoader(About),
      ContactWithLoader = WithLoader(Contact),
      BlogWithLoader = WithLoader(Blogs);

    return (
      <div>
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeWithLoader} />
            <Route path="/about" component={AboutWithLoader} />
            <Route path="/contact" component={ContactWithLoader} />
            <Route path="/blogs" component={BlogWithLoader} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Router;
