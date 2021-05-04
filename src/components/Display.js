import React, { Component } from "react";
import "../css/style.css";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <input
        value={this.props.result}
        className="display col-md-6 offset-md-3"
      />
    );
  }
}
export default Display;
