import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaCartArrowDown } from "react-icons/fa/index.esm";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const CorseDetails = () => {

  const{user}=useContext(AuthContext)

  const course = useLoaderData()
  console.log(course)

  const AddCart = (data)=>{

    const corse_id = data?._id
    const my_email = user?.email
    const corse_name = data?.corse_name
    const price = data?.price



    

    const selected_course_Data ={corse_id,my_email,corse_name ,price}

    console.log(selected_course_Data);

    console.log('Add Cart');

    fetch("http://localhost:4040/selected_course", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selected_course_Data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data){
          return  Swal.fire({
            icon: "success",
            title: "Add to Cart successful",
          });
         
        }
          return Swal.fire({
            icon: "error",
            title: "Already added ",
          });
        

      });


    
  }
  return (
    <div className="w-full flex justify-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ABC | Course Details </title>
      </Helmet>

      <div key={course._id} className="card w-96  bg-base-100 mt-10  ">
        <figure>
          <img className="rounded-xl " src={course.url} alt="course" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{course.course_name}</h2>
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
            <button onClick={()=>AddCart(course)} className="btn btn-success btn-outline btn-sm capitalize ">
              <FaCartArrowDown></FaCartArrowDown> Selected to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorseDetails;
