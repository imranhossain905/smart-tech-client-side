import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    return (
        <div className="card w-62 p-5">
            <div className=" bg-gray-300 card-body">
                <h2 className="card-title justify-center p-5 font-bold text-orange-500 ">Add Product</h2>


                <div className='flex grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5 mx-auto'>
                <input type="text" placeholder="Product anme" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="Product Code" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="Product Model" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="OriginalPrice" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="DiscountPrice" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="Post Date" className="input input-bordered input-info w-full max-w-xs" />
                </div>

               
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5 mx-auto'>
                <input type="text" placeholder="Your email" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="Phone Number" className="input input-bordered input-info w-full max-w-xs" />
                <input type="text" placeholder="Customer Code" className="input input-bordered input-info w-full max-w-xs" />
                </div>
               

               

                <div className="card-actions justify-end">
                    <Link to='/dashboard'><button className="btn btn-primary">Add To Product</button></Link>
                </div>
            </div>
        </div>


    );
};

export default AddProduct;