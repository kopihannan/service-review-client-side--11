import React from 'react';

const MyReviewsCard = ({ myReview }) => {
    console.log(myReview);
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask w-24 h-24">
                            <img src={myReview.foodImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{myReview.serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <p>{myReview.message}</p>
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

