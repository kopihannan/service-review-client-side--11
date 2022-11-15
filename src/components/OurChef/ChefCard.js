import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ChefCard = ({chefs}) => {
    const {name, work, image} = chefs;
    return (
        <div className='bg-gray-50 py-6 my-20 rounded-md shadow-md'>
            <div className=''>
                <img className='w-64 mx-auto rounded-md' src={image} alt="" />
            </div>
            <div className='text-center pt-3'>
                <h2 className='font-bold text-xl'>{name}</h2>
                <p className='font-medium'>{work}</p>
                <div className='flex justify-center pt-4'>
                    <p><FaFacebook></FaFacebook></p>
                    <p className='px-3'><FaTwitter></FaTwitter></p>
                    <p><FaInstagram></FaInstagram></p>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;