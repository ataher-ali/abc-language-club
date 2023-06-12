
import { useContext } from 'react';
import { FaInfoCircle } from 'react-icons/fa/index.esm';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const BestCourses = () => {
    const { course } = useContext(AuthContext);

    const cours = course.slice(0,6)
    return (
        <div>
            <p className="text-center text-3xl">Our Best Courses </p>
      <div className="mx-40 my-10 lg:grid lg:grid-cols-3 gap-7">
        {cours.map((course) => (
          <div key={course._id} className="">
            <div className="card w-96 bg-base-100 h-72 shadow-xl image-full">
              <figure>
                <img src={course.url} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{course.corse_name}</h2>
                <p>
                  Course Fee :{" "}
                  <span className="font-bold">{course.price} $ </span>{" "}
                </p>
                <p>
                  Instructor :{" "}
                  <span className="font-bold"> {course.username} </span>{" "}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/course_details/${course._id}`}
                    className="btn btn-info btn-sm  capitalize"
                  >
                    {" "}
                    <FaInfoCircle></FaInfoCircle> Details{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default BestCourses;