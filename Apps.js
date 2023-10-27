// {/* <div id = "parent">
//     <div id = "child">
//         <h1>I am h1 tag</h1>
//     </div>
// </div> */}

import React from "react";
import  ReactDOM  from "react-dom";


const parent = React.createElement("div",
 {id:"parent"}, 
 React.createElement("div",{id:"child"},
 React.createElement("h1",{},"i am h1 tag")));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);