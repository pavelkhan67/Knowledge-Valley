import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-slate-100">
            <div className="flex-1">
                <a className=" font-bold text-2xl">Knowledge Valley</a>
            </div>
            <div className="flex-none gap-2 text-primary cursor-pointer">
                <a>Profile</a>
                <a>Settings</a>
                <a>Logout</a>
            </div>
        </div>
    );
};

export default Header;