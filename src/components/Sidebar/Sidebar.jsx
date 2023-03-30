import React from 'react';

const Sidebar = ({ spendTime, bookmark }) => {
    let count = 0;
    for (const blogs of bookmark) {
        count++;
    }
    return (
        <div className='sticky top-0'>
            <h1 className='text-primary bg-purple-100 py-2 text-center rounded-md font-semibold'>Spent time on read : {spendTime} min</h1>
            <div className='bg-gray-300 rounded-md mt-5 py-2 px-2'>
                <h1>Bookmarked Blogs : {count}</h1>
                {
                    bookmark.map(blog => <p className='bg-white w-11/12 mx-auto mt-5 px-2 rounded-md'>{blog}</p>)
                }
            </div>
        </div>
    );
};

export default Sidebar;