import { useContext } from 'react';
import Social_login from '../Social login/Social_login';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
  
  const {password_register}=useContext(AuthContext)

    const handel_register =(e)=>{
        e.preventDefault();
        const f = e.target
        // const name = f.username.value;
        const password = f.password.value;
        const email = f.email.value;
        // const url = f.url.value;
        
 password_register(email,password)


    }



    return (
        <div className=''>
        <div className="card-body mx-10 md:mx-80">
        <form action="" className='' onSubmit={handel_register}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='username' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">image URL </span>
          </label>
          <input type="text" placeholder="image url" name='url' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover"> Already Have an Account ? </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success btn-outline capitalize ">Register</button>
        </div>
        </form>

<Social_login></Social_login>

      </div>
        </div>
    );
};

export default Register;