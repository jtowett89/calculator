import React, { Component } from "react";
import "../css/style.css";

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.btnClass}>
        <button
          onClick={this.props.onClick}
          className={`my_btn btn btn-primary`}
        >
          {this.props.symbol}
        </button>
      </div>
    );
  }
}
export default Btn;
