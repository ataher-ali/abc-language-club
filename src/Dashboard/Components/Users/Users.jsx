import { useContext} from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";


const Users = () => {
  const{allUser}=useContext(AuthContext)



const users_request =(power,email)=>{
  
  const userRequest = {userType : power,userRequest:'approved'}

  const url = `http://localhost:4040/user/${email}`
  fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userRequest),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: `${power} Approval Successful`,
        });
        location.reload()
      })
      .catch(error => {
        console.error(error);
      });
    
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
        <th>Email</th>
        <th>User Type</th>
        <th>User Request</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        allUser.map(user => (
          <tr key={user.id}>
        
        <th></th>
        <th>{user?.email}</th>
        <th>{user?.userType}</th>
        <th>{user?.userRequest}</th>
        <th>

        <button disabled={user?.userRequest == 'approved' || user?.userRequest ==null } className="btn btn-sm capitalize btn-success m-2" onClick={()=>users_request(user?.userRequest,user.email)} > Approve </button>
        
           
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