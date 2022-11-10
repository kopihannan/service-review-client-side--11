import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const provider = new GoogleAuthProvider();

const Login = () => {
    const { loginUser, googleProviderLogin } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLoginUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result =>{
                const user = result.user;
                
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
                        <form onSubmit={handleLoginUser} className="card-body">
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
                            <div>
                                <p>Create an Account <Link to='/signup'>Register</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogle} className="btn btn-danger">login with google<FaGoogle className='ml-3'></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;