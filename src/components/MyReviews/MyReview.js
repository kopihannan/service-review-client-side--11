import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(rel => rel.json())
            .then(data => setMyReviews(data))
    }, [user?.email, myReviews])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete your review?");
        if (confirm) {
            toast.success("Delete Success")
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                REMOVE
                            </th>
                            <th>Image & Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <ToastContainer/>
                        {
                            myReviews.length > 0 ? myReviews.map(myReview => <MyReviewsCard myReview={myReview} key={myReview._id} handleDelete={handleDelete}></MyReviewsCard>) : <div className='text-center py-28'>
                                <p className='font-bold text-red-500 text-4xl'>Review Not Found</p>
                            </div>
                        }
                    </tbody>

                </table>
            </div>

            <div>

            </div>
        </div>
    );
};

export default MyReview;