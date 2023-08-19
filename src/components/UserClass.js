import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      zodic: "Aries",
      color: "Blue",
      count: 0,
    };
    console.log(this.props.name + "Child constructor");
  }

  componentDidMount() {
    console.log("child componentDidMount");
  }

  render() {
    console.log(this.props.name + "Child render");
    const { name, location } = this.props;
    const { zodic, color, count } = this.state;
    return (
      <div className="user-card">
        <h1>Count:{count} </h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click me +
        </button>

        <br />
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Please Click -{" "}
        </button>

        <h4>Zodic: {zodic}</h4>
        <h4>Color: {color} </h4>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @Aastha18</h4>
      </div>
    );
  }
}

export default UserClass;
