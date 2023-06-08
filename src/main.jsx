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
import Users from "./Dashboard/Components/Users/Users.jsx";
import MainPage from "./Dashboard/Components/Main Page/MainPage.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import Profile from "./Pages/Login/Profile/Profile.jsx";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.jsx";

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
        path:"/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute> 
      },

      {
        path:"/all_course",
        element: <PrivateRoute><All_class></All_class></PrivateRoute>
      },
      {
        path:"selected_course",
        element: <PrivateRoute><SelectedClasses></SelectedClasses></PrivateRoute>
      },
      {
        path:"enrolled_course",
        element:<PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute> 
      },
      
      
    ]
  },
  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard",
        element: <MainPage></MainPage>
      },
      {
        path:"/dashboard/add_course",
        element: <Add_Course></Add_Course>
      },
      {
        path:"/dashboard/users",
        element: <Users></Users>
      },
      
    ]
  },
  {
    path:"/*",
    element: <NotFoundPage></NotFoundPage>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
