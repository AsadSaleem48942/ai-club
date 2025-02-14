import React, { Component, Fragment } from "react";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Body from "./components/Body/Body";
import Routes from "./components/routes/Routes";
import "./App.css";

class App extends Component {
  state = {
    pageVisited: "home",
  };

  changeState = (e) => {
    e.preventDefault();
    const route = e.target.text.toLowerCase();
    this.setState({ pageVisited: route });
  };

  render() {
    return (
      <Fragment>
        {/* <Header changeState={this.changeState} /> */}
        {/* <Body st={this.state.pageVisited} /> */}
        <Routes/>
        <div style={{ position: "relative" }}>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
