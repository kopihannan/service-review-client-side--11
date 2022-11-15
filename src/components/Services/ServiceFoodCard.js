import React from 'react';

const ServiceFoodCard = ({ food }) => {
    const { title, image, description, price } = food;
    return (
        <div>
            <div className="card w-full md:w-96 lg:w-96 bg-gray-50 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description.slice(0,100)}</p>
                    <div className="card-actions justify-between flex items-center">
                        <div className="font-bold">Price: ${price}</div>
                        <button className="btn btn-accent">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFoodCard;