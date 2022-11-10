
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardService from './CardService';

const Service = () => {

    const [items, setItems] = useState([]);
    const [limit, setLimit] = useState(3);

    const handleLoadMore =()=>{
        setLimit(limit + 3)
    }

    useEffect(() => {
        const url = 'https://server-vromon.vercel.app/service?size='+limit;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data.service);
             
            })
    }, [limit])



    return (
        <div>
            <div className='text-center my-7'>
                <h1 className='text-4xl font-bold'>Our Awesome Services</h1>
            </div>
            <div className='max-w-screen-xl mx-auto'>
                <div className='grid grid-cols-3 mx-auto w-full justify-center items-center'>
                    {
                        items.map((service) => <CardService key={service._id} service={service}></CardService>)
                    }
                </div>
                <div className='text-center my-8'>
                    <Link to='/service' className='bg-green-500 rounded-lg text-white font-medium py-2 px-10 hover:bg-green-700' onClick={handleLoadMore}>View More</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;