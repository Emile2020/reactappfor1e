import React, { Component } from "react";
import { render } from "react-dom";

class App {
  today = new Date();
  time = today.getHours() + ':' + today.getMinutes();
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  
  render() {
    return (
      <h1><em>welcome to my site, it's currently { time } </em></h1>
    );
  }
}

export default App