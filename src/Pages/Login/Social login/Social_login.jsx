import React, { useContext } from 'react';

const Social_login = () => {

    const handel_google_login =()=>{
        console.log('google');
        
    }
    return (
        <div className="flex flex-col w-full border-opacity-50">
  <div className="divider">OR</div>
  <div className="grid h-20  rounded-box place-items-center">

    <button onClick={handel_google_login} className='btn btn-success capitalize text-white '> Continue With Google </button>
  </div>
</div>
    );
};

export default Social_login;