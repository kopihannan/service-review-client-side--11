import React from 'react';

const cardService = ({ service }) => {
    const { title, description, image } = service;
    return (
        <div className='rounded-md bg-white w-80'>
            <div className="w-80 my-6">
                <figure><img src={image} alt="car!" /></figure>
                <div className="">
                    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                    <p className='font-medium text-gray-800'>{description}</p>
                    <div className="">
                        <button className="bg-green-500 text-white font-medium py-2 px-8 rounded hover:bg-green-700">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default cardService;