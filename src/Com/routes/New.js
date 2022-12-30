import React, { useContext } from 'react';
import { AuthContext } from '../Context/Authprovider';

const New = () => {
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
            email
        }
        console.log(comme)


        fetch('https://ser-ver-v.vercel.app/commens', {
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
        <div className='mt-48'>
            {
                user?.uid ?
                    <div>
                        <div><span className="label-text">{user?.displayName}</span>
                            <span> <img src={user?.photoURL} style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="" /></span>
                            <form onSubmit={handle}>
                                {/* <input type="text" placeholder="Enter Review" className="text-5xl" name='name' /> */}
                                <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
                                <button className='btn' type="submit">submit</button>
                            </form>
                        </div>
                    </div>
                    :
                    <h1 className='text-2xl font-bold text-orange-600 text-center mb-5'>Please Login to add review</h1>

            }
        </div>
    );
};

export default New;