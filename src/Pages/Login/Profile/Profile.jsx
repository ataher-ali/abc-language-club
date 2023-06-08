import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="m-4 md:mx-40">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ABC | Profile </title>
          </Helmet>
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