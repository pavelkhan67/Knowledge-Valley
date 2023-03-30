import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto mb-5 mt-5 lg:mt-0 '>
            <h1 className='text-center font-bold text-2xl bg-gray-200 py-2 rounded-sm'>Blog Part</h1>
            <div>
                <h1 className='font-bold text-xl mt-4'>1. Props vs state.</h1>
                <p className='mt-2'><span className='font-semibold'>Props:</span> Props are read-only components.Props are immutable. Props can be accessed by the child component. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                <p className='mt-2'><span className='font-semibold'>State:</span> The state is an updatable thing that is used to store data or information about the component and it can change over time. State is mutable. State cannot be accessed by child components. The change in state can happen as a response according to user action or system action. It is the main thing the react component, it can determine the behavior of the component and it's render process. It can only be accessed or modified inside the component or by the component directly.</p>

            </div>
        </div>
    );
};

export default Blog;