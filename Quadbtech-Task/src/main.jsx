import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import ShowList from "./pages/ShowList/ShowList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "show-list",
        element: <ShowList />,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path:"show-list/:id",
        element:
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto px-4">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
