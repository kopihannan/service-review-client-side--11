import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse py-20">
                    <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="lg:w-1/2 w-full rounded-lg shadow-2xl" alt='' />
                    <div className='w-1/2 pr-12'>
                        <h1 className="text-5xl font-bold text-[#ff7b00]">FOOD FOREST THAT'S AWESOME!</h1>
                        <p className="py-6 ">restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same.</p>
                        <button className="btn border-none bg-[#00829c]">Order now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;