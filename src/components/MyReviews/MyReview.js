import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';
import toast from 'react-hot-toast';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://foods-seven.vercel.app/reviews?email=${user?.email}`)
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setMyReviews(data);
            })
    }, [user?.email, logOut])

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete your review?");
        if (confirm) {

            fetch(`https://foods-seven.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }


    return (
        <div className='my-10'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                REMOVE
                            </th>
                            <th>Image & Name</th>
                            <th>Review</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
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