import { useState } from "react";

  

const User = ({ name }) => {
    const [zodic] = useState("Sagittarius");
    const [color] = useState("Red");

    return (
        <div className="user-card">
            <h3>Zodic: {zodic}</h3>
            <h4>Color: {color} </h4>
            <h2>Name: {name}</h2>
            <h3>Location: Gurugram</h3>
            <h4>Contact: @bk408</h4>
          </div>
      )
}
  

export default User;