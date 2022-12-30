import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/Authprovider';




const Login = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const form = location?.state?.from?.pathname || '/';

    const handlelogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password).then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError('')
            navigate('/')
        }).catch(error => {
            console.log(error)
            setError(error.message)

        })

    }
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handlegoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.error(error))
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">I know all about this. For years I have been continuously improving, accumulating knowledge and experience.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlelogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="login" />

                        </div>
                        <div className="form-control mt-6">
                            <input onClick={handlegoogle} type="submit" className="btn btn-primary" value="Google login" />

                        </div>
                        <div>
                            <h1 className='text-orange-400 font-bold'>{error}</h1>
                        </div>
                    </form>
                    <p className='text-center my-5'>new to Legal Firm? <Link className="label-text-alt link link-hover text-orange-600 font-bold py-10 " to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;