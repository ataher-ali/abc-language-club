import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const AdminRoute = ({ children }) => {
    const { userStatus, loading } = useContext(AuthContext);
    if(loading){
    return       <div className="flex justify-center  ">
    <div className="my-72">
      <progress className="progress w-56"></progress>
    </div>
  </div>
    }
    if (userStatus=='admin') {
    return children;
    }
    return <Navigate to="/dashboard" ></Navigate>
};

export default AdminRoute;

