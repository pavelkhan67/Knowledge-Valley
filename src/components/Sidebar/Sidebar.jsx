import React from 'react';

const Sidebar = ({spendTime, bookmark}) => {
    let blog = '';
    let count =0;
    for(const blogs of bookmark){
        blog = blog + ' ' + blogs+ ',';
        count++;
    }
    return (
        <div className='sticky top-0'>
            <h1 className='text-primary bg-purple-100 py-2 text-center rounded-md font-semibold'>Spent time on read : {spendTime} min</h1>
            <div>
            
            </div>
        </div>
    );
};

export default Sidebar;