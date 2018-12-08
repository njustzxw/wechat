import React from "react";
import "../css/top.css";
class AppTop extends React.Component {
  render() {
    return (
      <header>
        <h3>{this.props.word}</h3>
      </header>
    );
  }
}
export default AppTop;
