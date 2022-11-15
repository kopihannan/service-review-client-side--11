import React, { useEffect, useState } from 'react';
import ServiceFoodCard from './ServiceFoodCard';

const AllServiceFoods = () => {
    const [allfoods, setAllFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setAllFoods(data))
    }, [])

    return (
        <div className='my-20'>
            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold text-[#00829c]'>Our Foods Service</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                {
                    allfoods.map(food => <ServiceFoodCard food={food} key={food._id}></ServiceFoodCard>)
                }

            </div>

        </div>
    );
};

export default AllServiceFoods;