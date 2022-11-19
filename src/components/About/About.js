import React from 'react';
import image1 from '../../assets/images/about.jpg.webp'

const About = () => {
    return (
        <section>
            <div className="hero bg-gray-50 pb-44 py-20">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-full lg:w-1/2 md:w-1/2'>
                        <div className='relative flex'>
                            <img src={image1} className=" rounded-lg shadow-2xl" alt='' />
                        </div>
                    </div>
                    <div className='lg:w-1/2 md:w-1/2 w-full  pl-10'>
                        <h4 className='font-bold text-orange-600'>About us</h4>
                        <h1 className="text-5xl font-bold text-[#00829c]">Why Choose Food Forest!</h1>
                        <p className="py-6 text-justify font-medium">Food forest is the term given to food that can be prepared and served very quickly. While any meal with low preparation time can be considered to be food forest, typically the term refers to food sold in a restaurant or store with preheated or precooked ingredients (such as sandwich, hamburger, hotdog, pretzel, burrito, and so on) and served to the customer in a packaged form for take-out/take-away. Outlets may be stands or kiosks, which may provide no shelter or seating, or food forest restaurants</p>
                        <h2 className='text-xl font-bold text-[#00829c]'>Sun - Mon 8 AM - 11 PM</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;