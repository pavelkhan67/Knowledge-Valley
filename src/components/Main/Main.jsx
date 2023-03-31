import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
    const [blogs, setBlogs] = useState([])
    const [spendTime, setSpendTime] = useState(0);
    const [bookmark, setBookmark] = useState([]);

    const handleWatchTime = (time) => {
        const previousSpendTime = JSON.parse(localStorage.getItem("spendTime"));
        if (previousSpendTime) {
            const sum = previousSpendTime + time;
            localStorage.setItem("spendTime", sum)
            setSpendTime(sum)
        }
        else {
            localStorage.setItem("spendTime", time)
            setSpendTime(time)
        }
    };

    const handleBookmark = (blog) => {
        if (bookmark.includes(blog)) {
            toast('You Have Already Bookmarked This Blog')
        }
        else {
            let newBookmark = [...bookmark, blog];
            setBookmark(newBookmark)
        }

    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5'>
            <div className='col-span-4 lg:col-span-3'>
                {
                    blogs.map(blog => <Card handleBookmark={handleBookmark} handleWatchTime={handleWatchTime} blog={blog} key={blog.id}></Card>)
                }
            </div>
            <div className='col-span-4 lg:col-span-1'>
                <Sidebar bookmark={bookmark} spendTime= {spendTime}></Sidebar>
            </div>
        </div>
    );
};

export default Main;