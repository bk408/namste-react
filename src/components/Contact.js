
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
      <div>
        <h1>Contact us</h1>
        <h2>This is contact page</h2>
        <div>
          <h1 className="font-bold">{(loggedInUser)}</h1>
        </div>
      </div>
    );
}

export default Contact;