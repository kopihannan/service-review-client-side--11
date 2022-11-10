import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import img1 from '../../assets/person_1.jpg.webp';
import img2 from '../../assets/person_2.jpg.webp'
import img3 from '../../assets/person_3.jpg.webp'

const Meet = () => {
    return (
        <div className='my-16 max-w-screen-xl mx-auto'>
            <div className='text-center my-16'>
                <h2 className='text-3xl font-bold text-orange-500'>Meet Our Team</h2>
            </div>
            <div className='grid grid-cols-3'>
                <div className='flex justify-center items-center text-center'>
                    <div className=' bg-slate-600 rounded-lg shadow-xl'>
                        <img className='rounded-lg' src={img2} alt="" />
                        <h3 className='font-semibold text-xl mt-5'>Harry Neek</h3>
                        <p className='font-medium my-2'>Ceo-Founder</p>
                        <div className='flex justify-center mb-4'>
                            <FaFacebook className='text-white' />
                            <FaTwitter className='text-white mx-3' />
                            <FaInstagram className='text-white' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center text-center'>
                    <div className=' bg-slate-600 rounded-lg shadow-xl'>
                        <img className='rounded-lg' src={img1} alt="" />
                        <h3 className='font-semibold text-xl mt-5'>Harry Neek</h3>
                        <p className='font-medium my-2'>Manager</p>
                        <div className='flex justify-center mb-4'>
                            <FaFacebook className='text-white' />
                            <FaTwitter className='text-white mx-3' />
                            <FaInstagram className='text-white' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center text-center'>
                    <div className=' bg-slate-600 rounded-lg shadow-xl'>
                        <img className='rounded-lg' src={img3} alt="" />
                        <h3 className='font-semibold text-xl mt-5'>Harry Neek</h3>
                        <p className='font-medium my-2'>Director</p>
                        <div className='flex justify-center mb-4'>
                            <FaFacebook className='text-white' />
                            <FaTwitter className='text-white mx-3' />
                            <FaInstagram className='text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meet;