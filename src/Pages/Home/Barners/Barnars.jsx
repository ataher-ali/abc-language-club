import React from 'react';

const Barnars = () => {
    return (
        <div className='mx-64'>
            <div style={{height:'450px'}} className="carousel   w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://wpvip.edutopia.org/wp-content/uploads/2022/10/iStock-157309156_master.jpg?w=2880&quality=85" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://takelessons.com/blog/wp-content/uploads/2016/05/Group-of-diverese-people-meeting-for-a-book-club.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://th.bing.com/th/id/R.133e49f789fd6f264b0ea7711bc7cb5f?rik=rQ0GvXG6ki%2bwxQ&pid=ImgRaw&r=0" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://th.bing.com/th/id/OIP.4Q8pq9pP4V5g2CN8MCS0UQHaDm?pid=ImgDet&w=1316&h=640&rs=1" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Barnars;