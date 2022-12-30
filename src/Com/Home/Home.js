
import React from 'react';
import Post2 from '../../new/Post2';
import Post from './Post/Post';
import PrivateRoute from './PrivateRoute';
import Addpro from './repost/Addpro';


import A from './Shared/Layout/A';


const Home = () => {
    return (
        <div>





            <div className="flex flex-col w-full border-opacity-50">
                <div>
                    <A></A>
                </div>
                <div className='mt-5'>
                    {/* The button to open modal */}
                    <form>    <label htmlFor="my-modal-3" className="btn">Post a photo</label></form>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>



                            <Addpro></Addpro>

                        </div>
                    </div>

                </div>
                <div className="divider font-bold italic ...">Todays Highlight</div>
                <Post></Post>
            </div>
            <div>
                <h1 className="divider font-bold italic ...">EXPLORE GRIDS</h1>
                <Post2></Post2>
            </div>
        </div>
    );
};

export default Home;