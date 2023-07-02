
import React from "react";
import ReactDOM from "react-dom/client";


// JSX (Transpiled before it reaches the JS engine) - Parcel - Babel

// JSX => Babel transpiled it to => React.createElement => JS object => HTML Element(render)

const Title = () => (<h1 id="head">Namste React using JSX 🚀</h1>) 
const tips = (
  <h1>Hello Bhavya </h1>
) 

const number = 1000;

// Component composition 
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    {Title()}
    <Title></Title>
    <h1>{number}</h1>
    <h1>{500 + 450}</h1>
    {tips}
    {tips}
    {tips}
    <h1 className="head">
      Namste React Functional Component while using multiple lines{" "}
    </h1>
  </div>
);


// React Fragment - behave like an empty tag
const HeadingComponent3 = () => (
  <>
    <div id="container">
      <h1 className="head">
        example of react fragment
      </h1>
    </div>
    <div>
      <h1>Helo</h1>
    </div>
  </>
);


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent2 />)

