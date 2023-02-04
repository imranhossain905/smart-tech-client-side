import React from 'react';
import { Link } from 'react-router-dom';


const Detail = () => {

    return (

        <>
            <section >

                <h2 className='text-4xl text-orange-400 font-bold mt-5 p-3 text-center'>Chose Your Product</h2>
                <div className='flex p-5 m-5'>

                
                
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ml-3">
                        <div className="card w-96 h-96 bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_133585.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-semibold">Laptop</h2>  
                                <Link to='/laptop'><button className="btn w-full btn-secondary">See Details</button></Link>                     
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ml-3">
                        <div className="card w-96 h-96 bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_141800.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-semibold">PC</h2>
                                <Link to='/dasktop'><button className="btn w-full btn-secondary">See Details</button></Link>                       
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ml-3">
                        <div className="card w-96 h-96 bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_198665.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h2 className="text-2xl font-semibold">Parts & Accessories</h2>   
                                <Link to='/parts'><button className="btn w-full btn-secondary">See Details</button></Link>                    
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </section>
        </>




    );
};

export default Detail;