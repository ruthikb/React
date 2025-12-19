import React from "react";
import ReactDOM from "react-dom/client";

//react to create element 
// const element = React.createElement(
//   "div",
//   null,
//   React.createElement(
//     "div",
//     null,
//     React.createElement(
//       "div",
//       null,
//       React.createElement("h1", null, "Hello from React"),
//       React.createElement("a", {href:""}, "Click me")
//     )
//   )
// );


//jsx to create same element
// let heading = (
//   <div id="parent">
//     <div id="child">
//       <div id="subchild">
//       <h1 style={{color:"red"}}>Hello from React</h1>
//       <button href="# " style={{width:"100px"}}>Click me</button>
//       <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg" style={{width:"30%"}}></img>
//       </div>
//     </div>
//   </div>
// );

// console.log(heading);

//comparing both the elements
// console.log(element===heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


var  Header=()=>{
  return(
    <div>
      <div>
        <div style={{backgroundColor:"yellow"}}> 
          <h1 style={{color:"red"}}>Hello from React</h1>
          <a href="" style={{width:"100px"}}>Click me</a>
          <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg" style={{width:"30%"}}></img>
        </div>
      </div>
    </div>
  );
}
var ALl=()=>{
  return(
    <div>
      <div style={{backgroundColor:"red"}}>
        <h1>This is All Component</h1>
        <p>This is paragraph</p>
      </div>
      </div>
  ) ;
}
var Npm=()=>{
  return(
    <div>
      <div style={{backgroundColor:"green"}}>
        <h1>This is Npm Component</h1>
        <p>This is paragraph</p>
      </div>
      </div>
  ) ;
}
var Npx=()=>{
  return(
    <div>
      <div style={{backgroundColor:"orange"}}>
        <h1>This is Npx Component</h1>
        <p>This is paragraph</p>
      </div>
      </div>
  ) ;
}
function App(){
  return(
    <div>
    <ALl/>
    <div>
      <Header/>
      <Npm/>
      <Npx/>
      <div style={{backgroundColor:"blue"}}> This is App Component
        <div > This is nested div  
        </div>
      </div>
    </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);