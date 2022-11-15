import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const ServiceDetails = () => {
    const { title, description, price, image } = useLoaderData();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then(rel => rel.json())
            .then(data => setReviews(data))
    }, [reviews])

    return (
        <div className='flex justify-between  py-14 bg-slate-50'>
            <div className='w-1/2 px-9'>
                <img className='rounded' src={image} alt="" />
                <h2 className='text-3xl font-bold pt-6'>{title}</h2>
                <p className='font-medium py-4 text-justify'>{description}</p>
                <p className='font-bold text-xl'>Price: ${price}</p>
                <Review></Review>
            </div>
            <div className='w-1/2'>
                {
                    reviews.map(review => <div key={review._id}>

                        <div className='px-9 grid grid-cols-2 items-center bg-slate-400 py-4 mb-3 rounded'>
                            <div className='flex items-center'>
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://bountycdn.azureedge.net/~/media/d2a69bb579ba47108729309d9db8e07b.ashx?la=en" alt='' />
                                    </div>
                                </div>
                                <h2 className='ml-5 font-semibold text-xl'>Alex joe</h2>
                            </div>
                            <div className='text-justify text-sm font-medium'>
                                <p>{review.name}</p>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;