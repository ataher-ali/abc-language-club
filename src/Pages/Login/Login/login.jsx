import React from 'react';
import Social_login from '../Social login/Social_login';

const Login = () => {

    const handel_login =(e)=>{
        e.preventDefault();
        const f = e.target
        const password = f.password.value;
        const email = f.email.value;

        const user ={password, email,}
        console.log(user);

    }


    return (
        <div className=''>
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
          <input type="text" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover"> Forget Password </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success btn-outline capitalize ">Login</button>
        </div>
        </form>

        <Social_login></Social_login>

      </div>
        </div>
    );
};

export default Login;