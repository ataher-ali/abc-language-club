import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

 

const NavProfile = () => {
  const {user,logOut}=useContext(AuthContext)

    return (
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><a>Settings</a></li>
        <li><button onClick={()=>logOut()}>Logout</button></li>
      </ul>
    </div>
    );
};

export default NavProfile;