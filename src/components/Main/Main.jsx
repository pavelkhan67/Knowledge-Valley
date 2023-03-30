import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5'>
            <div className='col-span-3'>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog> )
            }
            </div>
            <div className='col-span-1'>
            <Sidebar></Sidebar>
            </div>
            
        </div>
    );
};

export default Main;