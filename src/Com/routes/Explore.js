import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Feed from './Feed';

const Explore = () => {
    const datas = useLoaderData();
    return (
        <div>
            <h1 className='text-center font-bold text-lg '>Feed</h1>
            <div className='grid grid-cols-1 mt-5 lg:pl-96 lg:ml-36'>

                {
                    datas.map(data => <Feed data={data}></Feed>)
                }
            </div>
        </div>
    );
};

export default Explore;