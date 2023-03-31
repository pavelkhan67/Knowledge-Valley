import React from 'react';

const Sidebar = ({spendTime, bookmark }) => {
    let count = 0;
    for (const blogs of bookmark) {
        count++;
    }
    let time = localStorage.getItem("spendTime")
    return (
        <div className='sticky top-5'>
            <h1 className='text-primary bg-purple-100 py-2 text-center rounded-md font-semibold'>Spent time on read : {time ? time : '0'} min</h1>
            <div className='bg-gray-200 rounded-md mt-5 py-5 px-4'>
                <h1 className='font-bold'>Bookmarked Blogs : {count}</h1>
                {
                    bookmark.map(blog => <p className='bg-white w-11/12 mx-auto mt-3 p-2 rounded-md font-semibold'>{blog}</p>)
                }
            </div>
        </div>
    );
};

export default Sidebar;