import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
const [allUser,setAllUser]=useState([])
const url = `http://localhost:4040/users`

useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data =>setAllUser(data) )
}, [url]);


const [user,setUser]=useState();

const admin =(user)=>{
    setUser('Admin')
    Swal.fire({
      icon: "success",
      title: `${user.email} \n Admin Setup successful`,
    });
    console.log(user);
}
const instructor =(user)=>{
    setUser('Instructor')
    Swal.fire({
      icon: "success",
      title: `${user.email} \n Instructor Setup successful`,
    });
    console.log(user);
}
const student =(user)=>{
    setUser('Admin')
    Swal.fire({
      icon: "success",
      title: `${user.email} \n Student Setup successful`,
    });
    console.log(user);
}

    return (
        <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>ABC L.C. | Dashboard All Users </title>
          </Helmet>
            <div className="overflow-x-auto w-full">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>email</th>
        <th>User type</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        allUser.map(user => (
          <tr key={user.id}>
        
        <th></th>
        <th>{user.email}</th>
        <th>{user.userType}</th>
        <th><Link to={`/dashboard/users/${user.email}`} className="btn btn-sm btn-outline"> update </Link></th>
        <th>

        <button   className="btn btn-sm capitalize btn-error m-2" onClick={()=>admin(user)}> Admin</button>
        <button className="btn btn-sm capitalize btn-success m-2" onClick={()=>instructor(user)} > Instructor </button>
        <button  className="btn btn-sm capitalize btn-warning m-2" onClick={()=>student(user)}> Student</button>
                
        </th>
          </tr>
        
        ))
      }

    </tbody>
  </table>
</div>

        </div>
    );
};

export default Users;