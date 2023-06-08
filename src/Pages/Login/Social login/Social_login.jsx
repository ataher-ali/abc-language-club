import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Social_login = () => {

  const {googleLogin}= useContext(AuthContext);

  const handel_google_login =()=>{
    console.log('btn cliked');
    googleLogin()
  }
    return (
        <div className="flex flex-col w-full border-opacity-50">
  <div className="divider">OR</div>
  <div className="grid h-20  rounded-box place-items-center">

    <button onClick={handel_google_login} className='btn btn-outline capitalize '>
      <FcGoogle></FcGoogle>
       Continue With Google </button>
  </div>
</div>
    );
};

export default Social_login;