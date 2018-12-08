import React from "react";
const red = {
  color: "red",
  fontSize: 16
};
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => (
  <li key={number.toString()} onClick={shownum}>
    {number}
  </li>
));

class Time extends React.Component {
  state = {
    date: new Date(),
    weather: ""
  };
  // 类似于vue中的 mounted
  componentDidMount() {
    this.setState({
      weather: this.props.weather
    });
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  show = () => {
    console.log(this.state.weather);
  };
  render() {
    return (
      <div>
        <div style={red}> 现在是 {this.state.date.toLocaleTimeString()} </div>
        <div>{this.props.weather}</div>
        <button onClick={this.show}>show</button>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

const shownum = () => {
  console.log(1);
};

export default Time;
