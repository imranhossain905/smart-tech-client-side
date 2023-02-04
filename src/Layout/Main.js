import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import Footer from '../Pages/SharePages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;