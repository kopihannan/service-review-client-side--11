import React, { useEffect, useState } from 'react';
import ServiceFoodCard from './ServiceFoodCard';

const ServicesFood = () => {

    const [foods, setFoods] = useState([]);
    console.log(foods);
    useEffect( () => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data.foods))
    }, [])

    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold text-[#00829c]'>Our Foods Service</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                {
                    foods.map(food => <ServiceFoodCard food={food} key={food._id}></ServiceFoodCard>)
                }

            </div>
        </div>
    );
};

export default ServicesFood;