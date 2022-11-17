import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { title, description, price, image, _id } = useLoaderData();
    const { user, } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [reviews, setReviews] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?service=${_id}`)
        .then(rel => rel.json())
        .then(data => setReviews(data))
    },[reviews, _id])

    //http://localhost:5000/reviews?email=tamu@tamu.com

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user) {
            const form = e.target;
            const message = form.message.value;
            const email = user?.email || "Not Found Email";
            const name = user?.displayName || "no name";
            const image = user?.photoURL || "not found image"
            toast.success("Succesfully you added review")
            form.reset();

            const review = {
                service: _id,
                serviceName: title,
                message,
                email,
                name,
                image

            }

            fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })


        }
        else {
            setError("Please Login First")
        }
    }

    return (
        <div className='flex justify-between  py-14 '>
            <div className='w-1/2 px-9'>
                <img className='rounded' src={image} alt="" />
                <h2 className='text-3xl font-bold pt-6'>{title}</h2>
                <p className='font-medium py-4 text-justify'>{description}</p>
                <p className='font-bold text-xl'>Price: ${price}</p>

                <form onSubmit={handleSubmit}>
                    <div className='w-1/2 mx-auto my-10'>
                        <p className='font-bold text-red-500'>{error}</p>
                        <div>
                            <textarea type="text"
                                name="message" required className="textarea textarea-bordered w-full" placeholder="Type Your Review"></textarea>
                        </div>
                        <div className="">
                            <ToastContainer />
                            <button className="btn btn-accent mt-4 w-full">Submit</button>
                        </div>
                    </div>
                </form>

            </div>

            <div className='w-1/2'>
                <h2>Total {reviews.length} Reviews</h2>
                {
                    reviews.map(review => <div key={review._id}>

                        <div className='px-9 grid grid-cols-2 items-center bg-slate-50 py-4 mb-3 rounded'>
                            <div className='flex items-center'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={review.image} alt='' />
                                    </div>
                                </div>
                                <h2 className='ml-5 font-semibold text-xl'>{review.name}</h2>
                            </div>
                            <div className='text-justify text-sm font-medium'>
                                <p>{review.message}</p>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;