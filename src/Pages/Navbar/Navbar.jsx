import React from 'react';
import logo from '../../assets/images/attachment_87378583.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.log(error))
    // }


    // const navItems = <>
    //     <li><Link to="/">Home</Link> </li>
    //     <li> <Link to="/about">About</Link> </li>
    //     {user?.email ? <>
    //         <li><Link to="/bookings">My Bookings</Link></li>
    //         <li><button onClick={handleLogOut}>Log out</button></li>
    //     </>
    //         : <li> <Link to="/login">Login</Link> </li>
    //     }
    // </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4 container">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* {navItems} */}
                        <Link className='' to="/">Home</Link>
                        <Link className='' to="/about">About</Link>
                        <Link className='' to="/blog">Blog</Link>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='h-16 w-34' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    <Link className='' to="/">Home</Link>
                    <Link className='' to="/about">About</Link>
                    <Link className='' to="/blog">Blog</Link>
                    {/* {navItems} */}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='' to="/login">login</Link>

            </div>
        </div>
    );
};

export default Navbar;