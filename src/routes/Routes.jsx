import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Events from "../pages/Events";
import Home from "../pages/Home";
import AddEvent from "../pages/AddEvent";
import MyEvent from "../pages/MyEvent";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "events",
        Component: Events,
      },
      {
        path: "addEvent",
        Component: AddEvent,
      },

      {
        path: "myEvent",
        Component: MyEvent,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Registration,
      },
    ],
  },
]);

export default router;
