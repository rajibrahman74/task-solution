import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home";
import ShowList from "./pages/ShowList/ShowList";
import ShowDetails from "./pages/ShowDetails/ShowDetails";
import Booking from "./pages/Booking/Booking";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/showlist",
        element: <ShowList />,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path:"movie/:id",
        element: <ShowDetails/>,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path:"/buyticket/:id",
        element: <Booking/>,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
