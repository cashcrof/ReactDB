import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRouter from "./AppRouter";
import Details from "./routes/Details";
import "./index.css";
import Watchlist from "./routes/Watchlist";
import Favourites from "./routes/Favourites";
import About from "./routes/About";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRouter />,
  },
  {
    path: "favourites",
    element: <Favourites />,
  },
  {
    path: "watchlist",
    element: <Watchlist />,
  },
  {
    path: "details/:movieId",
    element: <Details />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
