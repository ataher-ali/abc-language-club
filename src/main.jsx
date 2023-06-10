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
import CorseDetails from "./Pages/Corse Detals/CorseDetails.jsx";
import StudentDashboard from "./Dashboard/Student Dashboard/StudentDashboard.jsx";
import InstructorDashboard from "./Dashboard/Instructor Dashboard/InstructorDashboard.jsx";

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
        element: <All_class></All_class>
      },
      {
        path:"/course_details/:id",
        element: <PrivateRoute><CorseDetails></CorseDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:4040/courses/${params.id}`)
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:"/dashboard/admin",
        element: <PrivateRoute><MainPage></MainPage></PrivateRoute>
      },
      {
        path:"/dashboard/instructor",
        element: <PrivateRoute> <InstructorDashboard></InstructorDashboard> </PrivateRoute>
      },
      {
        path:"/dashboard/add_course",
        element: <PrivateRoute><Add_Course></Add_Course></PrivateRoute>
      },
      {
        path:"/dashboard/users",
        element: <PrivateRoute><Users></Users></PrivateRoute> 
      },
      {
        path:"/dashboard",
        element: <PrivateRoute><StudentDashboard></StudentDashboard></PrivateRoute>
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
