import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-gray-50 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className='font-semibold rounded-md text-[#ff6600]'>Home</Link></li>
                            <li><Link to='/all-foods' className='font-semibold rounded-md text-[#ff6600]'>Service</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold text-[#00829c]">Food Forest.</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/' className='font-semibold rounded-md text-[#ff6600]'>Home</Link></li>
                        <li><Link to='/all-foods' className='font-semibold rounded-md text-[#ff6600]'>Service</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <>
                        {
                            user?
                                <>  
                                
                                    <Link className='font-bold text-orange-600 hover:text-orange-700'>My Reviews</Link>
                                    <Link className='font-bold text-orange-600 hover:text-orange-700 mx-5'>Add Service</Link>
                                    <Link className='font-bold text-orange-600 hover:text-orange-700 mr-5' variant="light" onClick={handleLogOut}>Log Out</Link>
                                    <Link>
                                        {user?.photoURL ?
                                        <div className="avatar online">
                                        <div className="w-10 rounded-full">
                                          <img src={user?.photoURL}  alt=''/>
                                        </div>
                                      </div>
                                            : <FaUser></FaUser>
                                        }
                                    </Link>
                                </>
                                :
                                <>
                                    <Link className='btn' to='/login'>Login</Link>
                                </>
                        }


                    </>

                </div>
            </div>
        </div>
    );
};

export default Header;