import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const InstructorDashboard = () => {

    const {allUser,user}=useContext(AuthContext)
    const me = allUser.find(email=>email.email==user.email)
    
    console.log(me);


    const [sta,setSta]= useState(me.userRequest)

    const my_request =(request_data)=>{
        // console.log(allUser);
        const userRequest = {userRequest: request_data}

        fetch(`http://localhost:4040/user/${user?.email}`, {
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
                title: `${request_data} Request Successful`,
              });
              if(request_data=='admin'){
                return setSta('admin');
              }
              return setSta('student');
            })
            .catch(error => {
              console.error(error);
            });

    }
    return (
        <div>
            <h2 className="text-center font-bold  text-3xl my-4">Instructor Dashboard</h2>

            <div className="bg-emerald-200 p-5 flex justify-center items-center badge w-72 h-52 m-4">
                <div>
                <div className="text-xl my-2 bg-warning badge h-10 p-3"> Request Status </div>
                <p className="text-6xl my-"> {sta}</p>
                </div>
            </div>
            <button disabled={sta=='admin' } className="btn btn-success capitalize m-4"  onClick={()=> my_request('admin')}>Request Admin</button>
            <button disabled={sta=='student'} className="btn btn-success capitalize mt-4"  onClick={()=> my_request('student')}>Request Student</button>

        </div>
    );
};

export default InstructorDashboard;