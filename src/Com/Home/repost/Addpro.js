import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from "react-router-dom";



import { AuthContext } from '../../Context/Authprovider';
import toast from 'react-hot-toast';
import { config } from 'daisyui';

const Addpro = () => {

    // const imgHostKey = process.env.REACT_APP_imgbb_key;


    const { user } = useContext(AuthContext)

    const { register, formState: { errors }, handleSubmit } = useForm();

    const addPro = (data) => {
        console.log(data)
        const image = data.image[0]

        const formData = new FormData();
        formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(`https://api.imgbb.com/1/upload?key=0d5662d63a5b541b2b5385b71a99aa5b`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const book = {
                        bookname: data.name,
                        image: imgData.data.url,
                        USER: user.displayName,
                        USERPHOTO: user.photoURL,
                        count: 0


                    }

                    console.log(book)



                    fetch('https://ser-ver-v.vercel.app/addedbook', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);


                        })
                }
            })



    }

    return (
        <div>
            <h1 className='text-5xl'>Create POST</h1>
            <form onChange={handleSubmit(addPro)} >

                <div className="form-control w-full max-w-xs">
                    <label className="label">

                        <span className="label-text-alt">POST NAME </span>
                    </label>
                    <input type='text'{...register("name")} defaultValue="" className="input input-bordered w-full max-w-xs" />


                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">

                        <span className="label-text-alt">Image</span>
                    </label>
                    <input type='file'{...register("image", { required: "Photo is required" })} defaultValue="" className="input input-bordered w-full max-w-xs" />

                    {errors.img && <p role="alert">{errors.img?.message}</p>}
                </div>


                <Link to='/explore'> <input htmlFor="my-modal-6" className='input input-bordered w-full max-w-xs btn mt-5' type="Submit" value='Add Product' />
                </Link>
            </form>

        </div>
    );
};

export default Addpro;