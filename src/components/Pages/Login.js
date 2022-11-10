import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-danger">login with google<FaGoogle className='ml-3'></FaGoogle></button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;