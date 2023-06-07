import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavLinks = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all_course">All Course</Link>
      </li>

      {user ? 
        <>
          <li>
            <Link to="/selected_course">Selected Course</Link>
          </li>
          <li>
            <Link to="/enrolled_course">Enrolled Course</Link>
          </li>
        </>
       : 
        <></>
      }
    </>
  );
};

export default NavLinks;
