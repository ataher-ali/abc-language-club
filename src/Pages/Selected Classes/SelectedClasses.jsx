import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { IoLogoUsd } from 'react-icons/io';

const SelectedClasses = () => {
  const {user}=useContext(AuthContext)

  const [corse,setCourse]=useState([])

  const url = `http://localhost:4040/selected_course/${user?.email}`
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data =>setCourse(data) )
}, [url]);

const delToCart =(id)=>{
  console.log(id);
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result) => {
    if (result.isConfirmed) {
        fetch(`http://localhost:4040/selected_course/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
              console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    location.reload()
                  } 
                  }
                  )}})}

 const totalPrice =corse.reduce((sum, item) => sum + parseInt(item.price), 0);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ABC | Selected Classes </title>
      </Helmet>
      

      <div className="px-40  min-h-screen bg-base-200">

      <div className="overflow-x-auto py-20 md:px-40">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-lg">
        
        <th>Corse Name</th>
        <th>Details</th>
        <th>Delate</th>
        <th>Price $ </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        corse.map(c=> <>
              <tr >
        
        
        <td>
          {c.corse_name}
          
        </td>
        <th>
          <Link to={`/course_details/${c.corse_id}`} className="btn btn-warning btn-xs capitalize">Details</Link>
        </th>
        <th>
          <button onClick={()=>delToCart(c._id)} className="btn btn-error btn-xs capitalize">Delate </button>
        </th>
        <td className="flex items-center gap-3"> <span>{c.price}</span> <IoLogoUsd></IoLogoUsd> </td>
      </tr>
        </> )
      }

    </tbody>
    <tfoot className="text-lg">
      <tr>
        <th></th>
        <th></th>
        <th>Total Price : </th>
      <td className="flex items-center gap-3"> <span className="font-bold">{totalPrice}</span> <IoLogoUsd></IoLogoUsd> </td>
       
      </tr>
    </tfoot>
  </table>
    <div className="flex justify-end mx-20 my-6">

      <button className="btn btn-success font-bold hover:bg-opacity-70 capitalize" >Prosed to Pay</button>
    </div>
      </div>
      </div>
      



    </div>
  );
};

export default SelectedClasses;
