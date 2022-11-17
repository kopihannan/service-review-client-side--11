import React, { useEffect } from 'react';

const MyReview = () => {


    useEffect(()=>{
        fetch('http://localhost:5000/reviews?email=')
    },[])
    return (
        <div>
            
        </div>
    );
};

export default MyReview;