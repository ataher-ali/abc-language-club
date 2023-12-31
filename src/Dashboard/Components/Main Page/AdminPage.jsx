import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AdminPage = () => {
    const{allUser,course}=useContext(AuthContext)

    return (
        <div className="w-full md:my-10 mx-4 md:mx-6"> 
            <div className="md:grid md:grid-cols-3 gap-2">
                <div className="h-40 shadow-lg bg-red-200 md:w-80 items-center justify-center p-6 rounded-md">
                    <p className="text-2xl font-bold "> Total User </p>
                    <p className="text-teal-700 text-7xl text-center font-semibold">{allUser?.length}</p> 
                
                </div>
                <div className="h-40 shadow-lg bg-green-200 md:w-80 p-6 rounded-md">
                    <p className="text-2xl font-bold "> Total Course </p>
                    <p className="text-teal-700 text-7xl text-center font-semibold">{course?.length}</p> 
                </div>
                <div className="h-40 shadow-lg bg-blue-200 md:w-80 p-6 rounded-md">
                    <p className="text-2xl font-bold "> Total Enrolled </p>
                    <p className="text-teal-700 text-7xl text-center font-semibold">00</p> 
                </div>
            </div>
        </div>
    );
};

export default AdminPage;