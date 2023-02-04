import React from 'react';
import './Banner.css';
import img1 from '../../Assate/iamges/h.banner/computer-parts.jpg';
import img2 from '../../Assate/iamges/h.banner/office-laptop.webp';
import img3 from '../../Assate/iamges/h.banner/pc.jfif';
import BannerItem from './BannerItem';







const bannerData = [
    {
        image: img1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 1
    },
    
        
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;