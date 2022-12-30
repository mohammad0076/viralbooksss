import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/Authprovider';


const Signup = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')


    const { createUser, updateUserProfile } = useContext(AuthContext)
    const handlesignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        console.log(email, name, password)
        createUser(email, password).then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')
            setError('')
            form.reset()
            handleupdateprofile(name)
        })
            .catch(err => {
                console.error(err)
                setError(err.message)
            })



    }

    const handleupdateprofile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile).then(() => { }).catch(error => console.error(error))


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content md:grid-cols-2 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">I know all about this. For years I have been continuously improving, accumulating knowledge and experience.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlesignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="text" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />

                        </div>
                        <div>
                            <h1 className='text-orange-400 font-bold'>{error}</h1>
                        </div>
                    </form>
                    <p className='text-center my-5'>Already have any account? <Link className="label-text-alt link link-hover text-orange-600 font-bold py-10 " to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;