import React from 'react';

const Laptopdetail = ({categorie, setProduct}) => {

    const {img, name, discountPrice, originalPrice, } = categorie;

   
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl">
         <figure><img className='' src={img} alt="Shoes" /></figure>
         <div className="card-body justify-start items-center text-center">
             <h4 className="text-2xl font-semibold">{name}</h4>
             <p>Discount Price BDT: {discountPrice}</p>
             <p>Original Price BDT: <span className=' ml-3 origin-price'> {originalPrice}</span></p>
             <div className="#">
                 <label 
                 htmlFor="shopModal"
                  className="btn text-white btn-info"
                  onClick={() => setProduct(categorie)}
                  >Buy Now</label> 
             </div>
         </div>
     </div>
       
    );
};

export default Laptopdetail;