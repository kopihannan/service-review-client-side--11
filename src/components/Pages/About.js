import React from 'react';

const About = () => {
    return (
        <div className='max-w-screen-xl flex justify-center my-20 items-center'>
            <div className='w-1/2 px-10'>
                <h4 className='text-lg font-bold text-orange-600 mb-4'>About us</h4>
                <h1 className='text-4xl font-bold mb-9'>Explore All Corners of <br/> The World With Us</h1>
                <p className='text-justify font-medium'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. <br />

                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
            <div className='w-1/4'>
                <img className='rounded' src="https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt=""/>
            </div>
        </div>
    );
};

export default About;