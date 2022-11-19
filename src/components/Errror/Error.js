import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mt-11'>
            <h1 className='text-6xl font-bold text-red-500 my-12'>404 Page Not Found</h1>
            <Link to='/' className='font-semibold px-8 py-3 mt-28 rounded-md bg-green-500 hover:bg-green-700 text-white'>Go Back</Link>
        </div>
    );
};

export default Error;