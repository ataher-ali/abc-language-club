import { Link } from 'react-router-dom';
import './notfound.css';

const NotFoundPage = () => {
  return (
    <div className="md:mx-40 block">
      
      <div className="not-found">
      <img className="h-72 " src="https://th.bing.com/th/id/R.9163dd94dbe027b48bc237282c0bd4eb?rik=e27DemI3y0dFkA&pid=ImgRaw&r=0" alt="Error 404" />
      <h1 className="not-found-heading m-2">Oops! Page Not Found</h1>
      <p className="not-found-text m-2">The page you are looking for does not exist.</p>
      
      <Link className='btn btn-primary' to="/">Back to Home</Link>
    </div>

    </div>
  );
};

export default NotFoundPage;
