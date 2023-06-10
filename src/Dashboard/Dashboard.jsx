import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [admin,setAdmin]=useState(null)
  const [instructor,setInstructor]=useState(null)

  const [userStatus,setUserStatus] = useState()

  const email= user?.email
  const url = `http://localhost:4040/users/${email}`

useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data =>setUserStatus(data.userType) )
}, [url]);


  
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

        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content text-center">
          <li>
            <div className="flex flex-col justify-center">
              <div className="w-full">
                <img
                  className="h-40 rounded-full mx-auto block "
                  src={user?.photoURL}
                  alt=""
                />
                <div className="my-4">
                  <h1 className="text-center">{user?.displayName}</h1>
                  <h1 className="text-center">{email}</h1>
                  <div className="bg-green-300 gap-2 items-center flex justify-center text-center my-2 rounded-full p-2 font-bold">
                    <p>Status : </p>
                    <p className="bg-slate-100 rounded-full px-4 p-1">{userStatus} </p>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/dashboard"> Student Dashboard</Link>
          </li>

          {
            admin?<>
            <li>
            <Link to="/dashboard/admin"> Admin dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Users</Link>
          </li></>:<></>
          }
          {
            instructor?<>
            <li>
            <Link to="/dashboard/instructor">Instructor Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/add_course">Add Course</Link>
          </li>
            </>:<></>
          }
          
          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
