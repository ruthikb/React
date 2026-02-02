import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/Components/Header.jsx";
import { Body } from "./src/Components/Body.jsx";
import { About } from "./src/Components/About.jsx";
import { Error } from "./src/Components/Error.jsx";
import { Contact } from "./src/Components/Contact.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantData from "./src/Components/ResturantMenu.jsx";

//app layout
var AppLayout = () => {
  return (
    <div>
      <Header /> 
      <Outlet></Outlet>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/menu/:id",
        element:<RestaurantData></RestaurantData>,
      }
    ],
    errorElement: <Error></Error>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
