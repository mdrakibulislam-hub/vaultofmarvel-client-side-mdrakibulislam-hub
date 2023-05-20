import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar';
import Footer from '../../Components/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;