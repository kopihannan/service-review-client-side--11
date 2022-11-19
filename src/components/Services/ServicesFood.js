import React, { useEffect, useState } from 'react';
import { PhotoProvider } from 'react-photo-view';
import { Link } from 'react-router-dom';
import ServiceFoodCard from './ServiceFoodCard';


const ServicesFood = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('https://server-side-nu-jade.vercel.app/foods?limit=3')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='text-4xl font-bold text-[#00829c]'>Our Foods Service</h1>
            </div>
            <PhotoProvider>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
                    {
                        foods.map(food => <ServiceFoodCard food={food} key={food._id}></ServiceFoodCard>)
                    }
                </div>
            </PhotoProvider>
            <div className='text-center my-10'>
                <Link to='/all-foods' className='btn btn-primary'>See More</Link>
            </div>
        </div>
    );
};

export default ServicesFood;