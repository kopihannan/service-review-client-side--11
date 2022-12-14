import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import google from '../../assets/images/google.png'
import JwtAuth from '../JwtAuth/JwtAuth';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserProfile, googleProviderLogin } = useContext(AuthContext);
    const navigate = useNavigate()

    const provider = new GoogleAuthProvider();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                JwtAuth(user)
                console.log(user);
                form.reset();
                toast.success("Successfull Create account")
                handleUpdateUserProfile(name, photoURL);
                navigate('/')
            })
            .catch(e => {
                console.error(e);
            });

    }

    const handleProviderGoogle = () => {
        googleProviderLogin(provider)
            .then((result) => {
                const user = result.user;
                JwtAuth(user)
                toast.success("successfull create an accout");
                navigate('/')
            }).catch((error) => {
                console.error(error)
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <input type="text" required placeholder="Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input required type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Image URL" name='photoURL' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-1">
                                <button type='submit' className="btn btn-warning">Register</button>
                
                            </div>
                            <div className='text-center'>
                                <label className="label text-green-600">

                                    <Link to='/login' className="label-text-alt link link-hover text-green-600">Have an Account? Login</Link>
                                </label>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <div  onClick={handleProviderGoogle} className='btn btn-outline mb-3 flex'>
                                    <Link className='font-bold'>continue  with </Link>
                                    <img className='w-6 ml-2' src={google} alt=""/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;