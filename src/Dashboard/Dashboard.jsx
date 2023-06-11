import { useContext,} from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { AiFillFolderAdd, AiFillHome, } from 'react-icons/ai';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { FaUserCircle } from "react-icons/fa/index.esm";
import { RiAdminFill } from "react-icons/ri";

const Dashboard = () => {
  const { user,userStatus } = useContext(AuthContext);

  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ABC L.C. | Dashboard </title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  p-4">
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

        <ul className="menu p-4 w-80  h-full bg-base-200 text-base-content text-center">
          
           <li>
           <div className="flex flex-col w-full justify-center">
              <div className="w-full">
                <img
                  className="h-40 rounded-full mx-auto block "
                  src={user?.photoURL}
                  alt=""
                />
                <div className="my-4">
                  <h1 className="text-center">{user?.displayName}</h1>
                  <h1 className="text-center">{user?.email}</h1>
                  <div className="bg-blue-200 gap-2 items-center flex justify-center text-center my-2 rounded-full p-2 font-bold">
                    <p> Status : </p>
                    <p className="bg-slate-100 rounded-full px-4 p-1">{userStatus} </p>
                  </div>
                </div>
              </div>
            </div>
           </li>
          

          <li>
            <Link to="/"> <span className="text-2xl text-blue-500"> <AiFillHome></AiFillHome> </span> Home </Link>
          </li>
          {
            (userStatus=='student')?<>
            <li>
            <Link to="/dashboard/student"> <span className="text-2xl text-blue-500"> <FaUserGraduate></FaUserGraduate> </span> Dashboard</Link>
          </li>
            </>:<></>
          }

          {
           (userStatus=='admin')?<>
            <li>
            <Link to="/dashboard/admin"> <span className="text-2xl text-blue-500"><RiAdminFill></RiAdminFill></span> Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/users"> <span className="text-2xl text-blue-500"><FaUserCircle></FaUserCircle> </span> Users</Link>
          </li></>:<></>
          }
          {
          (userStatus == 'instructor')?<>
            <li>
            <Link to="/dashboard/instructor"> <span className="text-2xl text-blue-500"> <FaChalkboardTeacher></FaChalkboardTeacher> </span>  Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/add_course"> <span className="text-2xl text-blue-500"> <AiFillFolderAdd></AiFillFolderAdd> </span> Add Course</Link>
          </li>
            </>:<></>
          }
          
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
