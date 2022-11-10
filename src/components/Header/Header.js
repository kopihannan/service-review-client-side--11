import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOutUser} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOutUser()
        .then()
        .catch()
    }

    return (
        <div className="navbar bg-base-100 py-6 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/' className='font-semibold mr-7 hover:text-lime-600'>Home</Link>
                        <Link to='/service' className='font-semibold mr-7 hover:text-lime-600'>Services</Link>
                        <Link className='font-semibold mr-7 hover:text-lime-600'>About Us</Link>
                        <Link className='font-semibold mr-7 hover:text-lime-600'>Contact</Link>
                        <Link className='font-semibold mr-7 hover:text-lime-600'>Package</Link>
                        <Link to='/blog' className='font-semibold mr-7 hover:text-lime-600'>Blog</Link>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-10 mr-3' src={logo} alt="" />
                    <Link to='/' className="text-3xl font-bold font-serif">VROMON</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to='/' className='font-semibold mr-7 hover:text-lime-600'>Home</Link>
                    <Link to='/service' className='font-semibold mr-7 hover:text-lime-600'>Services</Link>
                    <Link className='font-semibold mr-7 hover:text-lime-600'>About Us</Link>
                    <Link to='/blog' className='font-semibold mr-7 hover:text-lime-600'>Blog</Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user.uid ? <><Link className="font-semibold hover:text-lime-600" onClick={handleLogOut}>Add Service</Link> <Link className="font-semibold mx-5 hover:text-lime-600" onClick={handleLogOut}>My Reviews</Link>  <Link className="font-semibold hover:text-lime-600" onClick={handleLogOut}>Logout</Link> </>  : <Link className="font-semibold hover:text-lime-600" to='/login'>Login</Link> 
                }

            </div>
        </div>
    );
};

export default Header;