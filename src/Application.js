import React, { Component } from "react";
import Display from "./components/Display";
import ButtonData from "./components/ButtonData";
import Btn from "./components/Btn";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  handleClick = (symbol) => {
    if (symbol == "=") {
      this.setState({ result: eval(this.state.result) });
    } else if (symbol == "C") {
      this.setState({ result: "" });
    } else {
      this.setState({ result: this.state.result + symbol });
    }
  };

  render() {
    return (
      <div className="row text-center">
        <Display result={this.state.result} />
        <div className="col-md-6 offset-md-3">
          <div className="row">
            {ButtonData.map((button) => {
              return (
                <Btn
                  key={button.id}
                  symbol={button.symbol}
                  btnClass={button.myclass}
                  onClick={() => {
                    this.handleClick(button.symbol);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Application;
