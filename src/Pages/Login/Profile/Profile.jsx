import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="m-4 md:mx-40">
            <div>
            <img className="h-40 rounded-full" src={user?.photoURL} alt="" />
                <div className="my-4">
                    <h1>{user?.displayName}</h1>
                    <h1>{user?.email}</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;