import React from 'react';
import { Link } from 'react-router-dom';

const cardService = ({ service }) => {
    const { title, description, image, price, _id} = service;



    return (
        <div className='rounded-md bg-gray-100 w-80 my-12 shadow'>
            <div className="w-80">
                <figure><img className='h-72 rounded-md' src={image} alt="car!" /></figure>
                <div className=" px-5">
                    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                    <p className='font-medium text-gray-800'>{description.slice(0,100)}</p>
                    <p className='font-medium text-xl text-gray-800 my-2'>Price: ${price}</p>
                    <div className="text-center my-4">
                        <Link to={`/service/${_id}`} className="bg-green-500 text-white font-medium py-2 px-8 rounded hover:bg-green-700 mb-4">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cardService;