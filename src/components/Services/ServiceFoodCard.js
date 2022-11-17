import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceFoodCard = ({ food }) => {
    const { title, image, description, price, _id } = food;

    return (
        <div>
            <div className="card w-full md:w-96 lg:w-96 bg-gray-50 shadow-xl">
                <figure>

                    <PhotoView src={image}>
                        <img src={image} alt="Shoes" />
                    </PhotoView>

                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description.slice(0, 100)}</p>
                    <div className="card-actions justify-between flex items-center">
                        <div className="font-bold">Price: ${price}</div>
                        <Link to={`/food-details/${_id}`} className="btn btn-accent">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFoodCard;