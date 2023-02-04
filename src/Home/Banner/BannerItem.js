import React from 'react';

const BannerItem = ({slide}) => {
    const {image,id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full flex items-center h-[550px]">
        <div className='carousel-img w-full h-full'>
          <img src={image} alt="" className="w-full h-full rounded-xl" />
        </div>
    
        <div className="absolute p-5 max-w-[570px]">
          <h1 className='text-6xl font-bold text-white mb-4'>
            Purchase Your <br/> Best Computer
          </h1>
          <p className='text-xl text-white mb-8'>
          We provide the latest quality Computer, Our goal is client satisfaction & we provide the best service.
          </p>
          <button className="btn btn-outline btn-info">Buy Now</button>
        </div>
        
        <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
          <a href={ `#slide${next}`} className="btn btn-circle">❯</a>
        </div>
      </div> 
    );
};

export default BannerItem;