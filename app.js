import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/Components/Header.jsx";
import { Body } from "./src/Components/Body.jsx";
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