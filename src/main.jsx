import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PermisoProfesora from "./componentes/layouts/PermisoProfesora";
import RegistroEstudiantes from "./componentes/layouts/RegistroEstudiantes";
let router = createBrowserRouter([
  {
    path: "/",
    element: <PermisoProfesora />,
  },

  {
    path:"/registrar",
    element:<RegistroEstudiantes/>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);