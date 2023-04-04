import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Items from "./components/Items/Items";
import Home from "./components/Home/Home";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import LoaderSpinner from "./components/LoaderSpinner/LoaderSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/items",
        element: <Items></Items>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
      },
      {
        path: "/item/:id",
        element: <ItemDetails></ItemDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
      },
      {
        path: "/about",
        element: <h2>Aobot</h2>,
      },
      {
        path: "/loader",
        element: <LoaderSpinner></LoaderSpinner>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
