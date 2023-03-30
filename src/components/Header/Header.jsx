import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-gray-100 w-full lg:w-11/12 mx-auto">
            <div className="flex-1">
                <h1 className=" font-bold text-2xl">Knowledge Valley</h1>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;