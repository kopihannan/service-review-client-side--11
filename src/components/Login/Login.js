import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import google from '../../assets/images/google.png'

const Login = () => {

    const { signIn, setLoading, googleProviderLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const provider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                //jwt token

                const currentUser = {
                    email: user.email
                }

                fetch('https://server-side-nu-jade.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(rel => rel.json())
                    .then(data => {
                        console.log(data);
                        toast.success('Successfully Login');
                        localStorage.setItem('food-token', data.token);
                        if (user) {
                            navigate(from, { replace: true });
                        }
                        else {

                        }
                    })


            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    //Google provider

    const handleGoogle = () => {
        googleProviderLogin(provider)
            .then(result => {
                const user = result.user;
                //jwt token

                const currentUser = {
                    email: user.email
                }

                fetch('https://server-side-nu-jade.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(rel => rel.json())
                    .then(data => {
                        console.log(data);
                        toast.success('Successfully Login');
                        localStorage.setItem('food-token', data.token);
                        if (user) {
                            navigate(from, { replace: true });
                        }
                        else {

                        }
                    })


            })
            .catch((error) => {
                console.error(error)
            });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <input type="email" required placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-1">
                                <button type='submit' className="btn btn-primary">Login</button>
                                <ToastContainer />
                            </div>
                            <div className='text-center'>
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover text-green-600">Create a New Account</Link>
                                </label>
                            </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                                <div  onClick={handleGoogle} className='btn btn-outline mb-3 flex'>
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

export default Login;