import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const provider = new GoogleAuthProvider();

const SignUp = () => {
    const {createUser, googleProviderLogin} = useContext(AuthContext);

    const navigate = useNavigate()


    const handleUserCreate = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result =>{
                navigate('/')
            })
           
            .catch()
    }

    const handleGoogle =()=>{
        googleProviderLogin(provider)
        .then(result =>{
            const user = result.user;
            navigate('/')
            console.log(user);
        })
        .catch(err => console.error(err))
    }



    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl">
                        <form onSubmit={handleUserCreate} className="card-body">
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
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                            <div>
                                <small className='text-green-400'>Have an Account? <Link to='/login'>Signin</Link></small>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogle} className="btn btn-danger">Signup with google<FaGoogle className='ml-3'></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;