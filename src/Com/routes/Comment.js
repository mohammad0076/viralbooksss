import React, { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';
import Com from './Com';

const Comment = () => {
    const { user } = useContext(AuthContext)

    const handle = event => {
        event.preventDefault();
        const form = event.target;

        const name = user?.displayName || 'unreg';
        const email = user?.email || 'unreg';
        const serviceName = form.name.value;


        const comme = {

            NameofService: serviceName,


            customer: name,
            photoURL: user.photoURL,
            email
        }
        fetch('http://localhost:5000/commens', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comme)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('succesfully reviewed')
                    form.reset()

                }
            })
            .catch(err => console.error(err))


        console.log(serviceName)

    }
    return (
        <div className=''>
            <div className='md:pl-96 md:ml-48'>
                <Com></Com>
            </div>
            <div >
                {
                    user?.uid ?
                        <div>
                            <div className='md:pl-96 md:ml-48'><span className="label-text">{user?.displayName}</span>
                                <span> <img src={user?.photoURL} style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="" /></span>
                                <form onSubmit={handle}>

                                    <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" name='name' />
                                    <button className='btn btn-primary' type="submit">submit</button>
                                </form>
                            </div>
                        </div>
                        :
                        <h1 className='text-2xl font-bold text-orange-600 text-center mb-5'>Please Login to add review</h1>

                }
            </div>
        </div>
    );
};

export default Comment;