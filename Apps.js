import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement("div",
//  {id:"parent"},
//  React.createElement("div",{id:"child"},
//  React.createElement("h1",{},"i am h1 tag")));

// React Element
const jsxheading = (
<h1 id="jsxhed">Heading using JSX Element</h1>
);

// React Component
const Title =()=> (
<h1 id="jsxhed">Heading using JSX Component</h1>
);
    
const Heading = () =>(
    <div>
        {/* <Title/> */}
        {Title()}
        {jsxheading}
        <h1 id = "heading">Functional React Component </h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);
root.render(<Heading/>);
