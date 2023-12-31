import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { CgLogOut, } from 'react-icons/cg';
import { FaUserCircle } from "react-icons/fa/index.esm";
import {BsTerminalDash} from "react-icons/bs";
 

const NavProfile = () => {
  const {user,logOut,userStatus}=useContext(AuthContext)


    return (
      <>
     
        <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to='/profile' className="justify-between">
          <FaUserCircle></FaUserCircle>
            Profile
            <p className="badge bg-warning py-3 text-slate-800 items-center ">{userStatus}</p>
          </Link>
        </li>
        <li><Link to={`/dashboard/${userStatus}`}>
        <BsTerminalDash></BsTerminalDash>
          Dashboard</Link>
          
          </li>
      </ul>
    </div>
{
  user?

    <button className="mx-2 btn btn-warning btn-sm capitalize " onClick={()=>logOut()}> <CgLogOut></CgLogOut> Logout</button>
    :
    <></>
}

    </>
    );
};

export default NavProfile;