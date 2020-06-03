import React, { Component } from "react";
import Loader from "../Loader/Loader";

const WithLoader = MyComponent => {
  return class WithLoader extends Component {
    state = {
      isLoading: true
    };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1500);
    }

    render() {
      const { isLoading } = this.state;
      return (
        <div
          style={{
            position: "relative",
            height: isLoading ? "100vh" : "auto"
          }}
        >
          {isLoading && <Loader />}
          {!isLoading && <MyComponent />}
        </div>
      );
    }
  };
};

export default WithLoader;
