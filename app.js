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


// var  Header=()=>{
//   return(
//     <div>
//       <div>
//         <div style={{backgroundColor:"yellow"}}> 
//           <h1 style={{color:"red"}}>Hello from React</h1>
//           <a href="" style={{width:"100px"}}>Click me</a>
//           <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg" style={{width:"30%"}}></img>
//         </div>
//       </div>
//     </div>
//   );
// }
// var ALl=()=>{
//   return( 
//     <div>
//       <div style={{backgroundColor:"red"}}>
//         <h1>This is All Component</h1>
//         <p>This is paragraph</p>
//       </div>
//       </div>
//   ) ;
// }
// var Npm=()=>{
//   return(
//     <div>
//       <div style={{backgroundColor:"green"}}>
//         <h1>This is Npm Component</h1>
//         <p>This is paragraph</p>
//       </div>
//       </div>
//   ) ;
// }
// var Npx=()=>{
//   return(
//     <div>
//       <div style={{backgroundColor:"orange"}}>
//         <h1>This is Npx Component</h1>
//         <p>This is paragraph</p>
//       </div>
//       </div>
//   ) ;
// }
// function App(){
//   return(
//     <div>
//     <ALl/>
//     <div>
//       <Header/>
//       <Npm/>
//       <Npx/>
//       <div style={{backgroundColor:"blue"}}> This is App Component
//         <div > This is nested div  
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }


//application form here

var Header = () => {
  return (
    <div className="Outerheader">
      <div className="logo">
        <img src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" style={{ width: "150px" }}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

var Restaurant = (props) => {
  return (
    <div className="restaurant-card">
      <img src={props.Image}></img>
      <h1>{props.Name}</h1>
      <p>Cuisine: {props.Cuisine}</p>
      <p>Rating: {props.Rating}</p>
      <h3>Delivery Time: {props.DeliveryTime}</h3>
    </div>
  );

}
//body layout
var Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search here"></input>
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        <Restaurant
          Rating="4.5"
          DeliveryTime="30 mins"
          Cuisine="North Indian, Chinese"
          Name="Restaurant 1"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>

        <Restaurant
          Rating="4.2"
          DeliveryTime="20 mins"
          Cuisine="South Indian, Thai"
          Name="Restaurant 2"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>
        <Restaurant
          Rating="4.7"
          DeliveryTime="25 mins"
          Cuisine="Italian, Mexican"
          Name="Restaurant 3"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>
        <Restaurant
          Rating="4.3"
          DeliveryTime="40 mins"
          Cuisine="Japanese, Korean"
          Name="Restaurant 4"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>
        <Restaurant
          Rating="4.6"
          DeliveryTime="35 mins"
          Cuisine="Mediterranean, Greek"
          Name="Restaurant 5"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>
        <Restaurant
          Rating="4.4"
          DeliveryTime="28 mins"
          Cuisine="French, Spanish"
          Name="Restaurant 6"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>
        <Restaurant
          Rating="5"
          DeliveryTime="30 mins"
          Cuisine="indian"
          Name="Restauran 7"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>
        <Restaurant
          Rating="4.3"
          DeliveryTime="50 mins"
          Cuisine="NorthIndian"
          Name="Restauran 8"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>
        <Restaurant
          Rating="3.9"
          DeliveryTime="45 mins"
          Cuisine="Rarajastani"
          Name="Restauran 9"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>
        <Restaurant
          Rating="4.4"
          DeliveryTime="20 mins"
          Cuisine="Gujarathi"
          Name="Restauran 10"
          Image="https://www.pixelstalk.net/wp-content/uploads/2016/07/3840x2160-Images-Free-Download.jpg"
        ></Restaurant>

      </div>
    </div>
  );
}

//app layout
var AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);