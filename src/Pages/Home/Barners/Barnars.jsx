import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Barnars = () => {
    return (
        <div className='mx-56 py-20 my-4'>

            <Carousel>
                <div>
                <img  src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/iStock-157309156_master.jpg?w=2880&quality=85" />  
                 
                    
                </div>
                <div>
                <img  src="https://th.bing.com/th/id/R.133e49f789fd6f264b0ea7711bc7cb5f?rik=rQ0GvXG6ki%2bwxQ&pid=ImgRaw&r=0" /> 
    
                    
                </div>
                <div>
                <img  src="https://th.bing.com/th/id/OIP.4Q8pq9pP4V5g2CN8MCS0UQHaDm?pid=ImgDet&w=1316&h=640&rs=1" /> 
     
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Barnars;