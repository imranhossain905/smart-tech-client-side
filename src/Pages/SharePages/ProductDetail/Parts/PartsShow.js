import React from 'react';
import { Link } from 'react-router-dom';

const PartsShow = () => {

    return (
        <>
            <section >

                <h2 className='text-4xl text-orange-400 font-bold mt-5 p-3 text-center'>Chose Your Product</h2>

                <div className='flex p-5 m-5'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_108232.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">Western Digital Purple WD20PURZ 2TB Surveillance HDD</h4>
                                <p>Discount Price BDT: 4,500 </p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'>4,800</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_94536.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">WD Purple 8TB Surveillance Video Recording Hard Drive</h4>
                                <p>Discount Price BDT: 19,000</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'>20,000</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50'
                             src="https://www.bdstall.com/asset/product-image/giant_83338.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">Corsair Vengeance RGB Pro 8GB DDR4 Desktop RAM</h4>
                                <p>Discount Price BDT: 4500</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'>5000</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_180103.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">G.Skill Trident Z 16GB Heatsink RAM</h4>
                                <p>Discount Price BDT:  6,500</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'> 6,800</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_102878.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">Esonic H61FFL Desktop Motherboard</h4>
                                <p>Discount Price BDT: 3300</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'>3600</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_97547.jpeg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">Gigabyte GA-H110M-DS2 Ultra Durable Motherboard </h4>
                                <p>Discount Price BDT: 3299</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'>3499</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default PartsShow;