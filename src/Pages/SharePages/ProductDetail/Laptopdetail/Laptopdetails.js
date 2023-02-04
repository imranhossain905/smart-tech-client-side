import React, { useEffect, useState } from 'react';
import Laptopdetail from './Laptopdetail';
import './Laptopdetail.css';
import LaptopModal from './LaptopModal';



const Laptopdetails = () => {

    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect( () => {
        fetch('pLaptop.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])


    return (

        <>
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 gap-6">
            {
                categories.map(categorie => <Laptopdetail
                    key={categorie}
                    categorie={categorie}
                    setProduct={setProduct}
                ></Laptopdetail>)
               
            }
           

            </div>
                {
                    product &&
                     <LaptopModal
                     product={product}
                     setProduct={setProduct}
                 ></LaptopModal>
                }

        </div>
        </>
    );
};

export default Laptopdetails;