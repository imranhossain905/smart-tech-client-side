import React from 'react';
import './ServiceCards.css';

const ServiceCard = ({ categori }) => {

    const { img, category } = categori;


    return (
        <>
            <section className='pt-5'>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ml-3">
                    <div to='/#' className="card w-96 h-96 bg-base-100 shadow-xl">
                        <figure><img className='w-50 h-50' src={img} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold">{category}</h2>
                        </div>
                    </div>


                </div>
            </section>

        </>
    );
};

export default ServiceCard;