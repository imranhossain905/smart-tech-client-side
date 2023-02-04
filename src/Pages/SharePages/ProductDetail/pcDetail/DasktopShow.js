import React from 'react';
import { Link } from 'react-router-dom';

const DasktopShow = () => {


    return (
        <>
            <section >

                <h2 className='text-4xl text-orange-400 font-bold mt-5 p-3 text-center'>Chose Your Product</h2>

                <div className='flex p-5 m-5'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_141800.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">Gaming PC Core i5 10th Gen 8GB RAM 240GB SSD LED</h4>
                                <p>Discount Price BDT: 42,500</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'> 42,800</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_202106.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">"WD Purple 8TB Surveillance Video Recording Hard Drive</h4>
                                <p>Discount Price BDT: 22,300</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'> 22,500</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_202619.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">Desktop PC Core i5 3rd Gen 8GB RAM 19-Inch Monitor</h4>
                                <p>Discount Price BDT: 17,000</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'> 17,150</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_81809.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">Student Desktop PC , Very low Price</h4>
                                <p>Discount Price BDT: 12,700</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'> 12,900</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_122756.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">Desktop PC Core i5 2nd Gen 500GB HDD 19 LED Monitor</h4>
                                <p>Discount Price BDT: 16,300</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'> 16,500</span></p>
                                <div className="#">
                                    <Link to='#'><button className="btn w-full btn-secondary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96  bg-base-100 shadow-xl">
                            <figure><img className='w-50 h-50' src="https://www.bdstall.com/asset/product-image/giant_137061.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-center">
                                <h4 className="text-2xl font-semibold">Desktop Office PC Intel Core i3 4th Gen 4GB RAM 500GB HDD</h4>
                                <p>Discount Price BDT: 14,100</p>
                                <p>Original Price BDT: <span className=' ml-3 origin-price'> 14,200</span></p>
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

export default DasktopShow;