import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import './Home.css'
import Service from './Service';

const Home = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div className='w-full background-img'>
                        <img src="https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute  top-1/4 w-2/4 left-24'>
                        <h1 className='text-white font-bold text-5xl mb-4'>Tourism is travel <br /> for leisure, recreational and <br /> business purpose</h1>
                        <p className='font-medium mb-9'>Travel refers to the activity of going on a long journey. Tourism also refers to travel, but there is a specific purpose in tourism. It refers to traveling to a place for pleasure.</p>
                        <Link className='bg-red-500 py-3 px-6 rounded font-medium text-white hover:bg-red-700'>Explore More</Link>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='w-full background-img'>
                        <img src="https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute  top-1/4 w-2/4 left-24'>
                        <h1 className='text-white font-bold text-5xl mb-4'>Tourism is travel <br /> for leisure, recreational and <br /> business purpose</h1>
                        <p className='font-medium mb-9'>Travel refers to the activity of going on a long journey. Tourism also refers to travel, but there is a specific purpose in tourism. It refers to traveling to a place for pleasure.</p>
                        <Link className='bg-red-500 py-3 px-6 rounded font-medium text-white hover:bg-red-700'>Explore More</Link>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='w-full background-img'>
                        <img src="https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute  top-1/4 w-2/4 left-24'>
                        <h1 className='text-white font-bold text-5xl mb-4'>Tourism is travel <br /> for leisure, recreational and <br /> business purpose</h1>
                        <p className='font-medium mb-9'>Travel refers to the activity of going on a long journey. Tourism also refers to travel, but there is a specific purpose in tourism. It refers to traveling to a place for pleasure.</p>
                        <Link className='bg-red-500 py-3 px-6 rounded font-medium text-white hover:bg-red-700'>Explore More</Link>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className='w-full background-img'>
                        <img src="https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full" alt='' />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute  top-1/4 w-2/4 left-24'>
                        <h1 className='text-white font-bold text-5xl mb-4'>Tourism is travel <br /> for leisure, recreational and <br /> business purpose</h1>
                        <p className='font-medium mb-9'>Travel refers to the activity of going on a long journey. Tourism also refers to travel, but there is a specific purpose in tourism. It refers to traveling to a place for pleasure.</p>
                        <Link className='bg-red-500 py-3 px-6 rounded font-medium text-white hover:bg-red-700'>Explore More</Link>
                    </div>
                </div>
            </div>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;