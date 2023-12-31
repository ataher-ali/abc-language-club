import { Navigate } from "react-router-dom";
import { useContext ,} from 'react';
import Social_login from '../Social login/Social_login';
import { AuthContext } from '../../../Provider/AuthProvider';


const Login = () => {
  const {password_login,user}=useContext(AuthContext)

    const handel_login =(e)=>{
        e.preventDefault();
        const f = e.target
        const password = f.password.value;
        const email = f.email.value;

        const user ={password, email,}
        console.log(user);
        password_login(email,password)
        f.reset();
    }


    return (

        <>
        {
      user? <Navigate to="/" ></Navigate> :

      <div className="card-body mx-10 md:mx-80">
        <form action="" className='' onSubmit={handel_login}>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="/register" className="label-text-alt link link-hover"> Forget Password </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success btn-outline capitalize ">Login</button>
        </div>
        </form>

        <Social_login></Social_login>

      </div>
      
      }

        </>
    );
};

export default Login;