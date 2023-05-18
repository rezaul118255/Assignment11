import React, { useContext, useState } from 'react';
import img from '../../assets/images/undraw_login_re_4vu2.svg'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
            })
            .catch(error => {
                setError(error.message)

            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className='text-amber-600'>
                                {
                                    <p>{error}</p>
                                }

                            </div>
                            <div>
                                {
                                    user && toast('user is found ')


                                }
                                <ToastContainer></ToastContainer>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Educational toys <Link className='text-orange-600 font-bold' to="/register">Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;