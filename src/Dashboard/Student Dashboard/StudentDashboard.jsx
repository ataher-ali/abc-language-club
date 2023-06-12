import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";

const StudentDashboard = () => {


const {allUser,user}=useContext(AuthContext)
    const me = allUser.find(email=>email.email==user.email)
    
    console.log(me);


    const [sta,setSta]= useState(me.userRequest)

    const my_request =(request_data)=>{
        // console.log(allUser);
        const userRequest = {userRequest: request_data}

        fetch(`https://abc-server-ataher-ali.vercel.app/user/${user?.email}`, {
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
              return setSta('instructor');
            })
            .catch(error => {
              console.error(error);
            });

    }
    return (
        <div>
            <h2 className="text-center font-bold  text-3xl my-4">Instructor Dashboard</h2>

                <div className=" w-1/4">

                    <div className="bg-emerald-200  flex justify-center flex-col items-center   badge w-80 h-52 m-4">
                        <div>
                        <div className="text-xl my-2 bg-warning badge h-10 p-3"> Request Status </div>
                        <p className="text-6xl my-"> {sta}</p>
                        </div>
                    </div>

                    <div className="mx-4 ">
                        <p className="text-4xl my-4 font-bold">Request</p>
                        <div className="flex">
                            <button disabled={sta=='admin'  } className="btn btn-neutral capitalize m-1"  onClick={()=> my_request('admin')}> Admin</button>
                            <button disabled={sta=='instructor' } className="btn btn-info capitalize m-1"  onClick={()=> my_request('instructor')}> Instructor</button>
                        </div>
                    </div> 

                </div>


        </div>
        
    );
};

export default StudentDashboard;