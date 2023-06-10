
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if(loading){
    return       <div className="flex justify-center  ">
    <div className="my-72">
      <progress className="progress w-56"></progress>
    </div>
  </div>
    }
    if (user) {
    return children;
    }
    return <Navigate to="/login" ></Navigate>
};

export default PrivateRoute;