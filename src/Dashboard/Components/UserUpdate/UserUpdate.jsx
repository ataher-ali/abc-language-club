import { useLoaderData } from "react-router-dom";

const UserUpdate = () => {
  const user = useLoaderData();
  console.log(user.email);


  return (
    <div>
      <p className="font-bold"> Email : {user.email}</p>
      <p className="font-bold"> Current User Type : {user.userType}</p>

        <select  name="userType"  className="select select-bordered w-full max-w-xs">
          <option disabled selected>
          {user.userType}
          </option>
          <option value='Admin'>Admin</option>
          <option value='Instructor'>Instructor</option>
          <option value='Instructor'>Instructor</option>
        </select>
        <button  type="submit" className="btn btn-success btn-wide capitalize m-4">Update</button>
      
    </div>
  );
};

export default UserUpdate;
