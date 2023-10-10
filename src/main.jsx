import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

//! React Router v6

//CreateBrowserRouter: Hook which can create path automatically
// Allows to handle errorElement prop as a component for each route.
// being used just for implementing new stuff (that is not breaking the app)

//* Rendering in all paths App
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
]);

//
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
