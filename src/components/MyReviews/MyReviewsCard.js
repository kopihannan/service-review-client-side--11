import React from 'react';
import { ToastContainer } from 'react-toastify';

const MyReviewsCard = ({ myReview, handleDelete }) => {
    const { foodImg, serviceName, message, _id } = myReview;


    return (

            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                            <ToastContainer/>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask w-24 h-24">
                                <img src={foodImg} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                        <p>{message}</p>
                    </div>
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
    );
};

export default MyReviewsCard;

