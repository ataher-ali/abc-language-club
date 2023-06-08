import { useState } from "react";
import { Helmet } from "react-helmet";

const SelectedClasses = () => {



    const userType="Studen"
    
    const [user,setUser]=useState(userType);

    const [display,setDisplay]=useState(false)
    const [display2,setDisplay2]=useState(false)
    const [display3,setDisplay3]=useState(false)
    
    const admin =()=>{
        setUser('Admin')
        setDisplay(true)
        setDisplay2(false)
        setDisplay3(false)
    }
    const instructor =()=>{
        setUser('Instructor')
        setDisplay(false)
        setDisplay2(true)
        setDisplay3(false)
    }
    const student =()=>{
        setUser('Admin')
        setDisplay(false)
        setDisplay2(false)
        setDisplay3(true)
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ABC | Selected Classes </title>
          </Helmet>
            <p>{user}</p>
           
                <button disabled={display}  className="btn btn-sm capitalize btn-error m-2" onClick={()=>admin()}> Admin</button>
                <button disabled={display2} className="btn btn-sm capitalize btn-success m-2" onClick={()=>instructor()} > Instructor </button>
                <button disabled={display3} className="btn btn-sm capitalize btn-warning m-2" onClick={()=>student()}> Student</button>
                
             
        </div>
    );
};

export default SelectedClasses;