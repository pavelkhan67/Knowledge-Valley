import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto mb-5 mt-5 lg:mt-0 '>
            <h1 className='text-center font-bold text-2xl bg-gray-200 py-2 rounded-sm'>My Blogs</h1>
            <div className='w-full lg:w-11/12 mx-auto'>
                <h1 className='font-bold text-xl mt-4'>1. Props vs state.</h1>
                <p className='mt-2'><span className='font-semibold'>Props:</span> Props are read-only components.Props are immutable. Props can be accessed by the child component. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                <p className='mt-2'><span className='font-semibold'>State:</span> The state is an updatable thing that is used to store data or information about the component and it can change over time. State is mutable. State cannot be accessed by child components. The change in state can happen as a response according to user action or system action. It is the main thing the react component, it can determine the behavior of the component and it's render process. It can only be accessed or modified inside the component or by the component directly.</p>

                <h1 className='font-bold text-xl mt-4'>2. How does useState() work?</h1>
                <p className='mt-2'><span className='font-semibold'>useState():</span> The useState() is a Hook that allows you to have state variables in functional components. So basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
                <p>Every time a component renders, useState gives us an array containing two values: <br />

                    1. The state variable (counter) with the value you stored. <br />
                    2. The state setter function (setCounter) which can update the state variable and trigger React to render the component again.
                    <br />
                    This is how useState() hook works.
                </p>

                <h1 className='font-bold text-xl mt-4'>3. Purpose of useEffect other than fetching data.</h1>
                <p className='mt-2'><span className='font-semibold'>useEffect():</span> The useEffect in react js allows us to perform side effects in our components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers. The second argument is optional. We can use useEffect in some ways like; <br /> Running on state change: validating input field. <br /> Validating an input while it's receiving characters is another great application for useEffect . Whilst the input is being stored in a state using useState , the validation takes place every time the input changes, giving immediate feedback to the user.</p>
                <p className='mt-2'> Running on state change: live filtering. <br /> We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies.</p>

                <h1 className='font-bold text-xl mt-4'>4. How Does React work?</h1>
                <p className='mt-2'><span className='font-semibold'>React:</span> ReactJS is one of the most popular JavaScript libraries for mobile and web application development.It is created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.</p>
                <p className='mt-2'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code. <br />
                React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.
                The reason for this is that JavaScript is very fast and it's worth keeping a DOM tree in it to speed up its manipulation.</p>
            </div>
        </div>
    );
};

export default Blog;