import React, { Component } from "react";
import Display from "./components/Display";
import ButtonData from "./components/ButtonData";
import Btn from "./components/Btn";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
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
      <>
        <Header />
        <div className="row text-center" style={{ marginBottom: "5em" }}>
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
        <Footer />
      </>
    );
  }
}

export default App;
