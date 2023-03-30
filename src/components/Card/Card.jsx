import React from 'react';

const Card = ({ blog, handleWatchTime, handleBookmark }) => {
    const { id, author_name, blog_title, blog_image, author_image, publish_date, read_time } = blog
    return (
        <div className='mb-10'>
            <img className='object-cover w-full rounded-lg mb-2' src={blog_image} alt="" />
            <div className='flex justify-between items-center px-2'>
                <div className='flex gap-4 '>
                    <img className='w-12 rounded-3xl shadow-xl' src={author_image} alt="" />
                    <div>
                        <h1 className='font-bold'>{author_name}</h1>
                        <p className='text-gray-500 text-sm'>{publish_date}</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <p className='text-gray-500'>{read_time} min read</p>
                    <p onClick={()=>handleBookmark(blog_title)} href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg></p>
                </div>
            </div>
            <h1 className='text-2xl font-bold mt-4'>{blog_title}</h1>
            <p style={{display:'inline-block'}} onClick={()=>handleWatchTime(read_time)} className='cursor-pointer text-primary underline' href="">Mark as read</p>
            <hr className='border-gray-300 mt-5' />
        </div>
    );
};

export default Card;