import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-danger">Signup with google<FaGoogle className='ml-3'></FaGoogle></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;