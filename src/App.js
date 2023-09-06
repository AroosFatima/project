// import logo from './logo.svg';

import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/Dashboard";
import Person from "./demo/person";
import WebLogin from "./web-pages/Web-Login";
import WebTask from "./web-pages/Web-Task";
import WebLocation from "./web-pages/Web-Location";
import { loader } from "./pages/Dashboard";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: loader,
  },
  {
    path: "/person",
    element: <Person />,
  },
  {
    path: "/web-login",
    element: <WebLogin />,
  },
  {
    path: "/web-task",
    element: <WebTask />,
  },
  {
    path: "/web-location",
    element: <WebLocation />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
