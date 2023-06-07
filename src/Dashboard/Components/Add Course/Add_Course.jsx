import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Add_Course = () => {

  const {user}=useContext(AuthContext)

    const handel_Class_add =(e)=>{
        e.preventDefault();
        const f = e.target
        const username = f.username.value;
        const email = f.email.value;
        const url = f.url.value;
        const corse_name = f.class_name.value;
        const price = f.price.value;
        const seats = f.seats.value;
        
        const classData ={username, email, url,corse_name, price, seats}
        console.log(classData);
      
    }


    return (
        <div className='my-6 w-full px-20 '>
          <h2 className="text-center my-4 font-bold text-4xl">Add Course</h2>
        <div className="m-6  ">
        <form action="" className='' onSubmit={handel_Class_add}>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Course Name</span>
          </label>
          <input type="text" placeholder="Corse " name='class_name' className="input input-bordered" />
        </div>
        <div className="form-control">
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL </span>
          </label>
          <input type="url" placeholder="image url" name='url' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input type="number" placeholder="Available seats" name='seats' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number"  placeholder="Price" name='price' className="input input-bordered" />
        </div>
        <div className="form-control ">

        <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
        <input type="text" value={user?.displayName} placeholder="name" name='username' className="input input-bordered" />

        <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
        <input value={user?.email} type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success btn-outline capitalize ">Add Class</button>
        </div>
        </form>
      </div>
        </div>
    );
};

export default Add_Course;