import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Nabvar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            
     </div>
    );
};

export default Main;