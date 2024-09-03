import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./routes/layout/home"
import Menu from "./routes/layout/menu"
import Admin from "./routes/layout/admin"
import Aboutus from "./routes/layout/aboutUS"
import Contactus from "./routes/layout/contactUs"
import OrderDetails from "./routes/layout/orderDetails";
import AdminLoged from "./routes/layout/adminLoged";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/home/menu",
    element: <Menu/>,
  },
  {
    path: "/home/Aboutus",
    element: <Aboutus/>,
  },
  {
    path: "/home/Contactus",
    element: <Contactus/>,
  },
  {
    path: "/home/menu/orderDetails",
    element: <OrderDetails/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/admin/Logged",
    element: <AdminLoged/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);