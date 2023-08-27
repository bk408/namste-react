import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        bio: "default",
        id: 0,
      },
    };
    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/bk408");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log(this.props.name + "Child render");

    const { name, bio, id  } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
        <h3>ID:{id} </h3>
        
      </div>
    );
  }
}

export default UserClass;
