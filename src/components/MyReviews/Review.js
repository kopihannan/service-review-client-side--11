import React from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';

const Review = () => {
    const { _id } = useLoaderData()
    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const message = form.message.value;

        const review = {
            message,
        }

        // console.log(user);
        fetch(`https://foods-seven.vercel.app/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success("Review Update Successfully")
                }
                else{
                    console.log("failed");
                }

            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='w-1/2 mx-auto my-10'>
                    <div>
                        <textarea type="text"
                            name="message" required className="textarea textarea-bordered w-full" placeholder="Type Your Review"></textarea>
                    </div>
                    <div className="">
                        <button className="btn btn-accent mt-4 w-full">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Review;