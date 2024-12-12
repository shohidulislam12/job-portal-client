import { StrictMode } from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      errorElement: <h2>route not foud</h2>,
      children:[
        {
            
        }
      ]
    },
  ]);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
