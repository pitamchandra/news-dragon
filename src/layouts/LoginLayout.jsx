import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className='bg-info bg-gradient bg-opacity-50 min-vh-100'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;