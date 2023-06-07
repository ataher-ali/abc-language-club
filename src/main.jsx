import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Register from "./Pages/Login/Register/Register.jsx";
import Login from "./Pages/Login/Login/login.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import SelectedClasses from "./Pages/Selected Classes/SelectedClasses.jsx";
import EnrolledClasses from "./Pages/EnrolledClasses/EnrolledClasses.jsx";
import All_class from "./Pages/All Class/All_class.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Add_Course from "./Dashboard/Components/Add Course/Add_Course.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/register",
        element: <Register></Register>
      },
      {
        path:"/login",
        element: <Login></Login>
      },

      {
        path:"/all_course",
        element: <All_class></All_class>
      },
      {
        path:"selected_course",
        element: <SelectedClasses></SelectedClasses>
      },
      {
        path:"enrolled_course",
        element: <EnrolledClasses></EnrolledClasses>
      },
      
      
      
    ]
  },
  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard/add_course",
        element: <Add_Course></Add_Course>
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
