import { useState } from "react";

export var Header = () => {
   const [button, setButton] = useState("login");
  return (
    <div className="Outerheader">
      <div className="logo">
        <img src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg" style={{ width: "150px" }} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                if (button == "login") {
                  setButton("logout");
                } else {
                  setButton("login");
                }
              }}
              className="login-button"
            >
              {button}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}