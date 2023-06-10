import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SelectedClasses = () => {
  const {user}=useContext(AuthContext)

  const [corse,setCourse]=useState([])

  const url = `http://localhost:4040/selected_course/${user?.email}`
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data =>setCourse(data) )
}, [url]);

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
      <tr>
        
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
              <tr>
        
        
        <td>
          {c.corse_name}
          
        </td>
        <th>
          <Link to={`/course_details/${c.corse_id}`} className="btn btn-warning btn-xs capitalize">Details</Link>
        </th>
        <th>
          <button className="btn btn-error btn-xs capitalize">Delate </button>
        </th>
        <td>{c.price}  </td>
      </tr>
        </> )
      }

    </tbody>
    <tfoot>
      <tr>
        <th></th>
        <th></th>
        <th>Total Price : </th>
        <th>00</th>
      </tr>
    </tfoot>
  </table>
    <div className="flex justify-end mx-20 my-6">

      <button className="btn btn-success capitalize" >Prosed to Pay</button>
    </div>
      </div>
      </div>
      



    </div>
  );
};

export default SelectedClasses;
