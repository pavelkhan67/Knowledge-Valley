import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css'

const Main = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 main'>
            <div>
            {
                blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog> )
            }
            </div>
            <div>
            <Sidebar></Sidebar>
            </div>
            
        </div>
    );
};

export default Main;