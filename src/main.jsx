import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Layout/Root";
import Home from "./Components/Page/Home/Home";
import AddCoffee from "./Components/Page/AddCoffee/AddCoffee";
import UpdateCoffee from "./Components/Page/UpdateCoffee/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/update",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
