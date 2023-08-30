import { useState } from "react";
import { FOOD_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnNameReact, setbtnNameReact] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg bg-green-50">
      <div className="logo-container">
        <img className="h-14 px-4 mt-3" src={FOOD_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg">
            Online Staus: {OnlineStatus ? "🟢" : "🔴"}{" "}
          </li>
          <li className="px-4 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-lg">Cart</li>
          <button
            className="login text-lg px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
