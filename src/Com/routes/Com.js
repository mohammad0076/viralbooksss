import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Com = () => {
    const datas = useLoaderData();

    return (
        <div className='mt-24'>
            {
                datas.map(data => <div>






                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src={data.photoURL} />
                            </div>
                        </div>
                        <div className="chat-bubble">{data.NameofService}</div>
                    </div>





                </div>)
            }
        </div>
    );
};

export default Com;