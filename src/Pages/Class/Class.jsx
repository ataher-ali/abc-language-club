import React from 'react';

const Class = () => {

    const handel_Class_add =(e)=>{
        e.preventDefault();
        const f = e.target
        const username = f.username.value;
        const email = f.email.value;
        const url = f.url.value;
        const class_name = f.class_name.value;
        const price = f.price.value;
        const seats = f.seats.value;

        const classData ={username, email, url,class_name, price, seats}
        console.log(classData);

    }


    return (
        <div className=''>
        <div className="card-body mx-10 md:mx-80">
        <form action="" className='' onSubmit={handel_Class_add}>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Class Name</span>
          </label>
          <input type="text" placeholder="name" name='class_name' className="input input-bordered" />
        </div>
        <div className="form-control">
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL </span>
          </label>
          <input type="text" placeholder="image url" name='url' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input type="text" placeholder="Available seats" name='seats' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Price" name='price' className="input input-bordered" />
        </div>
        <div className="form-control ">

        <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
        <input type="text" placeholder="name" name='username' className="input input-bordered" />

        <label className="label">
            <span className="label-text">Instructor Email</span>
          </label>
        <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success btn-outline capitalize ">Add Class</button>
        </div>
        </form>
      </div>
        </div>
    );
};

export default Class;