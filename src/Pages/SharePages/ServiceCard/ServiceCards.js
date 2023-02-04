import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from "react-icons/hi";
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
    
    const [categori, setCategori] = useState([]);

    useEffect(() => {
        fetch('productCatagory.json')
            .then(res => res.json())
            .then(data => setCategori(data));
    }, [])




    return (
        <>
            <div className='p-2 rounded bg-gray-100'>
                <h2 className='text-4xl text-orange-400 font-bold mt-5 p-3 text-center'>Popular Category</h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                    {
                        categori.map(categori => <ServiceCard
                            key={categori.id}
                            categori={categori}

                        ></ServiceCard>)
                    }



                </div>

                <div className=' text-center p-5 '>
                    <Link to='/detail'>
                        <button className=" text-xl btn btn-buy">category Explore  <span className='text-3xl ml-1'><HiArrowNarrowRight/></span> </button>
                        
                    </Link>
                </div>

            </div>
        </>
    );
};

export default ServiceCards;

