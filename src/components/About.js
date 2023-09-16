


import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";



class About extends Component{
    
    constructor(props) {
        super(props)
      //  console.log("Parent constructor");
    }

    componentDidMount() {
      //  console.log("Parent compomnentDidMount");
    }

    render()
    {
        console.log("Parent render")
         return (
           <div>
             <h1>About Class Component</h1>
             <h2>This is about page</h2>
             <User name={"Bhavya Khatri"} />
             <UserClass name={"Donald Trump"} location={"Alwar"} />
             <UserClass name={"Mota Bhai"} location={"Noida"} />
             <UserClass name={"Lapoo Sachin"} location={"Bihar"} />
             
             <div>
               <h1>
                 <UserContext.Consumer>
                   {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser }</h1>}
                 </UserContext.Consumer>
               </h1>
             </div>
           </div>
         );
    }
}



export default About;