import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaCartArrowDown } from "react-icons/fa/index.esm";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

const CorseDetails = () => {

  const{AddToCart,user}=useContext(AuthContext)

  const course = useLoaderData()
  console.log(course)

  const AddCart=(course)=>{
    AddToCart(course)
  }


  return (
    <div className="w-full flex justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ABC | Course Details </title>
      </Helmet>

      <div key={course._id} className="w-96   bg-base-100 mt-10  ">
        <figure>
          <img className="rounded-xl " src={course.url} alt="course" />
        </figure>
        <div className="card-body ">
          <p className="text-4xl">{course.course_name}</p>
          <p>
            Course Fee : <span className="font-bold">{course.price} $ </span>{" "}
          </p>
          <p>
            Instructor : <span className="font-bold"> {course.username} </span>{" "}
          </p>
          <p>
            Available Seat : <span className="font-bold"> {course.seats} </span>{" "}
          </p>
          <div className="card-actions justify-center my-4">
            {
              user?
            <button onClick={()=>AddCart(course)} className="btn btn-success btn-outline btn-sm capitalize ">
              <FaCartArrowDown></FaCartArrowDown> Selected to Cart
            </button> :
            <Link to={`/login`} className="btn btn-success btn-outline btn-sm capitalize ">
              <FaCartArrowDown></FaCartArrowDown> Selected to Cart
            </Link>
            }

          </div>
        </div>
        <div>
     
      </div>
      </div>


    </div>
  );
};

export default CorseDetails;
