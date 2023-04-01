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
import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const router = createBrowserRouter([
  {
    path: "*",
    element: <AppRouter />,
    errorElement: <ErrorBoundary />
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
