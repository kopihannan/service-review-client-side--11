import React from 'react';
import chef1 from '../../assets/images/chef-1.jpg.webp'
import chef2 from '../../assets/images/chef-2.jpg.webp'
import chef3 from '../../assets/images/chef-3.jpg.webp'
import chef4 from '../../assets/images/chef-4.jpg.webp'
import ChefCard from './ChefCard';

const OurChef = () => {
    const chef = [
        {
            "id": 1,
            "name": "Alex Justin",
            "work": "Chef",
            "image": chef1
        },
        {
            "id": 2,
            "name": "Maria",
            "work": "Chef",
            "image": chef2
        },
        {
            "id": 3,
            "name": "John Smith",
            "work": "Chef",
            "image": chef3
        },
        {
            "id": 4,
            "name": "Steave Borad",
            "work": "Chef",
            "image": chef4
        },
    ]
    return (
        <div>
            <div className='text-center mt-10'>
                <h1 className='text-4xl font-bold text-[#00829c]'>Our Amazing Chef</h1>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        chef.map(chefs=> <ChefCard key={chefs.id} chefs={chefs}></ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurChef;