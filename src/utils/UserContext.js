import { createContext } from "react";



const UserContext = createContext({
    loggedInUser: "Default User",
    loggedInId: "0"
})



export default UserContext;