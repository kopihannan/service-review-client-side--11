import React from 'react';

const BlogCart = ({blog}) => {
    const {title, description} = blog;
    return (
        <div>
            <div className='w-3/4 mx-auto shadow p-7 m-7 rounded'>
            <h1 className='text-4xl text-green-500 font-bold pb-5'>{title}</h1>
            <p className='font-medium text-gray-700'>{description}</p>
            </div>
        </div>
    );
};

export default BlogCart;