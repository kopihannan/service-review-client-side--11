import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const { title, image, description, price } = useLoaderData();

    return (
        <div className='max-w-screen-lg mx-auto my-11 rounded-lg shadow p-10'>
            <div className='flex justify-center text-center'>
                <div className='bg-slate-700 rounded-lg py-4'>
                    <h2 className='text-4xl font-bold pb-3'>{title}</h2>
                    <div className='text-center mx-auto'>
                        <img className='mx-auto rounded shadow w-4/5' src={image} alt="" />
                    </div>
                    <p className='font-medium my-4'>{description}</p>
                    <h3 className='text-lg font-semibold text-orange-500'>Price: ${price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Details;