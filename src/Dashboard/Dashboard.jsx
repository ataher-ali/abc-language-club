import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
                <meta charSet="utf-8" />
                <title>ABC L.C. | Dashboard </title>
          </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <li>
            
            <div className="flex flex-col justify-center">
              <div className="w-full">
              <img className="h-40 rounded-full mx-auto block " src={user?.photoURL} alt="" />
              <div className="my-4">
                <h1 className="text-center">{user?.displayName}</h1>
                <h1 className="text-center">{user?.email}</h1>
              </div>
              </div>
            </div>
            
          </li>
          
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
          <Link to='/profile'> Profile </Link>
          </li>
          <li>
            <Link to="/dashboard/add_course">Add Course</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
