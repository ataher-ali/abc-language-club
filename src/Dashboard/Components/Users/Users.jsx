import { useEffect, useState } from "react";


const Users = () => {
const [allUser,setAllUser]=useState([])
const url = `http://localhost:4040/users`

useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data =>setAllUser(data) )
}, [url]);
    return (
        <div>
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
        <th><button className="btn btn-sm btn-outline"> update </button></th>
      
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