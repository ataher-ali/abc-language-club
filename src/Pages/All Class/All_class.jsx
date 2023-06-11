import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaCartArrowDown, FaInfoCircle } from "react-icons/fa/index.esm";

const All_class = () => {

  const{user,course,AddToCart}= useContext(AuthContext)

    return (
        <div className="mx-4 md:mx-44 my-6 h-max">
           <Helmet>
                <meta charSet="utf-8" />
                <title>ABC | All Course </title>
          </Helmet>
            <h1 className="text-center text-3xl font-bold my-5">All Course</h1>
            <div className="card flex justify-center">
            <div className="lg:grid lg:grid-cols-3 gap-7">
                {
                    course.map(course => <div key={course._id} className="card  w-96 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src={course.url}
                        alt="course"
                      />
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title">{course.corse_name}</h2>
                      <p>Course Fee : <span className="font-bold">{course.price} $ </span> </p>
                      <p>Instructor : <span className="font-bold"> {course.username} </span> </p>
                      <div className="card-actions mt-6 justify-end">
                        <Link to={`/course_details/${course._id}`} className="btn btn-info btn-sm  capitalize"> <FaInfoCircle></FaInfoCircle> Details </Link>
                        {
                          user?
                          <button className="btn btn-sm btn-outline capitalize btn-neutral " onClick={()=>AddToCart(course)}>
                            <span className="text-2xl">
                            <FaCartArrowDown></FaCartArrowDown> 
                            </span>
                            Add Cart
                          </button>:
                          <></>
                        }
                      </div>
                    </div>
                  </div> )
                }
            </div>
            </div>
        </div>
    );
};

export default All_class;