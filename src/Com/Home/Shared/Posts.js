import React from 'react';

const Posts = () => {
    return (
        import React, { useContext } from 'react';
    import { useForm } from 'react-hook-form';
    import { useNavigate } from "react-router-dom";
    import date from 'date-and-time';
    import { AuthContext } from '../../Au/Authprovider';
    import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
    import toast, { Toaster } from 'react-hot-toast';
    const Addpro = () => {
        const imgHostKey = process.env.REACT_APP_imgbb_key;
        console.log(imgHostKey)

        const { user } = useContext(AuthContext)
        const { register, formState: { errors }, handleSubmit } = useForm();
        const navigate = useNavigate()
        const addPro = (data) => {
            console.log(data)
            const image = data.image[0]

            const formData = new FormData();
            formData.append('image', image);
            // const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
            fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.success) {
                        console.log(imgData.data.url);
                        const book = {
                            bookname: data.name,

                            Resale_price: data.Resale_price,

                            image: imgData.data.url,
                            number: data.number,
                            qyality: data.options,
                            category: data.category,
                            Location: data.Location,
                            orginal_price: data.orginal_price,
                            useyear: data.useyear,
                            username: data.username,
                            email: data.email,
                            time: data.tiem,
                            date: data.date






                        }
                        console.log(book)


                        fetch('https://oobbss-server.vercel.app/addedbook', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `bearer ${localStorage.getItem('acccessToken')}`
                            },
                            body: JSON.stringify(book)
                        })
                            .then(res => res.json())
                            .then(result => {
                                console.log(result);
                                toast.success(`${data.name} added succcessfully`)
                                navigate('/dashboard/myproducts')

                            })
                    }
                })



        }
        const now = new Date();
        return (
            <div>
                <h1 className='text-5xl'>Add A Product</h1>
                <form onSubmit={handleSubmit(addPro)}>
                    {/* product name, price, condition type(excellent, good, fair), mobile number, location (Chittagong, Dhaka, etc.), */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Book  Name</span>
                        </label>
                        <input type='text'{...register("name")} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Resale Price</span>
                        </label>
                        <input type='text'{...register("Resale_price")} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Mobile Number</span>
                        </label>
                        <input type='text'{...register("number")} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Book image</span>
                        </label>
                        <input type='file'{...register("image", { required: "Photo is required" })} className="input input-bordered w-full max-w-xs" />

                        {errors.img && <p role="alert">{errors.img?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">

                            <span className="label-text-alt w-full max-w-xs mt-2">Condition Type</span>
                        </label>
                        <select type='options'{...register("options", { required: "options is required" })} className="select w-full max-w-xs">

                            <option>Exiclient</option>
                            <option>good</option>
                            <option>Fair</option>

                        </select>

                    </div>
                    <div className="form-control w-full max-w-xs mt-2">
                        <label className="label">

                            <span className="label-text-alt">Category</span>
                        </label>
                        <select type='options'{...register("category", { required: "options is required" })} className="select w-full max-w-xs">

                            <option>Tragedy</option>
                            <option>Comedy</option>
                            <option>Thriller</option>

                        </select>

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Location</span>
                        </label>
                        <input type='text'{...register("Location")} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Orginal Price</span>
                        </label>
                        <input type='text'{...register("orginal_price")} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Use year</span>
                        </label>
                        <input type='text'{...register("useyear")} className="input input-bordered w-full max-w-xs" />


                    </div>





                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Seller Name</span>
                        </label>
                        <input type='text'{...register("username")} defaultValue={user?.displayName} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">Email</span>
                        </label>
                        <input type='email'{...register("email")} defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">


                            <span className="label-text-alt">Time</span>
                        </label>
                        <input type='text'{...register("time")} defaultValue={date.format(now, ' HH:mm:ss')} className="input input-bordered w-full max-w-xs" />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">

                            <span className="label-text-alt">date</span>
                        </label>
                        <input type='text'{...register("date")} defaultValue={date.format(now, 'YYYY/MM/DD ')} className="input input-bordered w-full max-w-xs" />


                    </div>







                    <input className='input input-bordered w-full max-w-xs btn-accent' type="Submit" value='Add Product' />

                </form>
            </div>
        );
    };

    export default Addpro;
    );
};

export default Posts;