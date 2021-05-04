import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer myfooter">
        <p className="foot">
          &copy; {new Date().getFullYear()} React Calculator. All rights
          reserved. Developed by{" "}
          <a href="https://justice.zerone.co.ke" target="_blank">
            Justice Towett
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
