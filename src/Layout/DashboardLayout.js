import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Home/Navbar/Navbar';
import useTitle from '../hook/useTitle';

const DashboardLayout = () => {
    useTitle('Dashboar');
    return (
        <div>
             <Navbar/>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
            <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/myProduct'>My Product</Link></li>
                        <li><Link to='/page404'>Admin</Link></li>
                        <li><Link to='/addProduct'>Add A Product</Link></li>    
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;