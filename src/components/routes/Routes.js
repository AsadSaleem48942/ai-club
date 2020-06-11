import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import About from "../screens/About/About";
import Contact from "../screens/Contact/Contact";
import Posts from "../screens/posts/Posts";
import SinglePost from "../screens/single-post/SinglePost";
import Header from "../Header/Header";
import WithLoader from "../WithLoader/WithLoader";
import { createBrowserHistory } from "history";

class Routes extends Component {
  render() {
    const HomeWithLoader = WithLoader(Home),
      AboutWithLoader = WithLoader(About),
      ContactWithLoader = WithLoader(Contact),
      PostsWithLoader = WithLoader(Posts),
      SinglePostWithLoader = WithLoader(SinglePost)
    
    const history = createBrowserHistory();

    return (
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeWithLoader} />
            <Route path="/about" component={AboutWithLoader} />
            <Route path="/contact" component={ContactWithLoader} />
            <Route path="/blogs" exact component={PostsWithLoader} />
            <Route path="/blogs/:id" component={SinglePostWithLoader} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Routes;
