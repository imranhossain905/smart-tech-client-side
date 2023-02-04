import React from 'react';

const LaptopModal = ({ product, setProduct }) => {

    const { name, email, phone, discountPrice, originalPrice, } = product;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.email.value;
        const phone = form.phone.value;
        console.log(name, email, phone);
        setProduct(null);

    }


    return (
        <>

            <input type="checkbox" id="shopModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  bg-gray-600 relative">
                    <label htmlFor="shopModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-orange-500 p-3 font-bold">{name}</h3>

                    <form onSubmit={handleBooking}  className='grid grid-cols-1 gap-3 mt-10'>
                        <h3 className="text-xl text-white p-3 font-bold"><span> Original Price: </span> {originalPrice} <span>BDT</span></h3>
                        <h3 className="text-xl text-white p-3 font-bold"><span> Discount Price: </span> {discountPrice} <span>BDT</span></h3>

                        <input type="text" name='email' value={email} placeholder='Your email' className="input input-bordered w-full" />
                        <input type="text" name='phone' value={phone} placeholder='Your Phone' className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn btn-primary text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default LaptopModal;
