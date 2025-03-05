import React, { Component } from "react";

class LifecycleLogger extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated!");
  }

  componentWillUnmount() {
    console.log("Component will unmount!");
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Logger</h2>
        <p>Check the console for lifecycle messages.</p>
      </div>
    );
  }
}

export default LifecycleLogger;
