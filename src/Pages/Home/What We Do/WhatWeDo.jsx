import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='my-9'>
            <h1 className='text-center text-3xl font-bold '>What We Do</h1>
            <div className='flex'>
                <div className='w-1/3 flex flex-col items-center p-6'>
                    <img className='w-full h-72 border rounded-xl shadow' src="https://th.bing.com/th/id/R.1dccf5145914df0e078a46e5dd39587b?rik=aLwlOwz10VLyFw&pid=ImgRaw&r=0" alt="" />
                    <h2 className='text-2xl font-bold my-4'>Socialize</h2>
                    <p>Meeting people from other countries and different environments, with different customs and beliefs, makes one more understanding of other people’s cultures. Language is a tool that allows us to share our culture and connect with fantastic people.  </p>
                </div>
                <div className='w-1/3 flex flex-col items-center p-6'>
                    <img className='w-full h-72 border rounded-xl shadow' src="https://studyinthestates.dhs.gov/sites/default/files/assets/images/content/photodune-2721464-group-of-college-students-m.jpg" alt="" />
                    <h2 className='text-2xl font-bold my-4'>Learn</h2>
                    <p> we has adopted a face-to-face language exchange format. But in order to adapt to the pandemic we switched to online meetings. Ideally, participants will meet to exchange their native language and help each other practice through conversations and other dynamic activities.</p>
                </div>
                <div className='w-1/3 flex flex-col items-center p-6'>
                    <img className='w-full h-72 border rounded-xl shadow' src="https://th.bing.com/th/id/OIP.CD17RC-sqoGYcDL_jPAmjgHaFz?pid=ImgDet&w=1122&h=880&rs=1" alt="" />
                    <h2 className='text-2xl font-bold my-4'>Meet</h2>
                    <p>We meet online or at various locations, according to a monthly schedule. Each online session/group is managed by a team leader who decides which language combinations will be offered by his/her group according to the participants.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;