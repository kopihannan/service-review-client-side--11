import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: e.target.name.value,
         
        };
        e.target.reset()

        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => {
                toast.error(err.message);
            })

    };
    return (
        <form onSubmit={handleSubmit}>
            <div className=" my-5">
                <textarea type="text"
                    name="name" className="textarea textarea-bordered w-full" placeholder="Type Your Review"></textarea>
            </div>
            <div className="">
                <button className="btn btn-accent w-full">Submit</button>
            </div>
        </form>
    );
};

export default Review;