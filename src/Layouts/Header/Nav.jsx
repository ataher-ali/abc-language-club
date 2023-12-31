import NavLinks from "./NavLinks";
import NavProfile from "./NavProfile";
import Logo from "../../Components/Logo";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Nav = () => {
  const { user } = useContext(AuthContext);
  return <div className="md:px-40 bg-slate-100">
    <div className="navbar">
    <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <NavLinks></NavLinks>
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-center px-20 hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLinks></NavLinks>
      
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?
      <NavProfile></NavProfile> :
      <>
      <Link className='btn btn-sm  btn-success capitalize ' to='/login'>Login</Link>
      <Link className='btn btn-sm  btn-neutral btn-outline ml-4 capitalize ' to='/register'>Registration</Link>
      </>
    }
    
  </div>
    </div>
  </div>;
};

export default Nav;
