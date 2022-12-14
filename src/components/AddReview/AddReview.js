import React from 'react';
import toast from 'react-hot-toast';

const AddReview = () => {

    const handleAddFood =(e)=>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;
        toast.success("Succesfully you added food")
            form.reset();

            const foods = {
                title,
                price,
                image,
                description

            }

            fetch('https://foods-seven.vercel.app/foods', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(foods)
            })

    }

    return (
        <div className='w-full md:w-1/2 lg:w-1/3 mx-auto'>
            <form onSubmit={handleAddFood} className='my-10 bg-slate-50 p-10 rounded-md shadow'>
                <input type="text" required name='title' placeholder="Food Name" className="input input-bordered w-full mb-4" /> <br/>
                <input type="number" required name='price' placeholder="Price" className="input input-bordered w-full mb-4" /> <br/>
                <input type="text" required name='image' placeholder="Food Image URL" className="input input-bordered w-full mb-4" /> <br/>
                <textarea required name='description' className="textarea textarea-bordered w-full" placeholder="Type Food Details"></textarea> <br/> <br/>
                <input type="Submit" value="Submit" className="input input-bordered w-full mb-4 bg-gradient-to-r from-sky-500 to-indigo-500 border-none text-white font-semibold cursor-pointer" />
            </form>
        </div>
    );
};

export default AddReview;

