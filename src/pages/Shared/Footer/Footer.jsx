import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <div className='bg-dark mt-5 py-4 text-white'>
            <p className='text-center text-capitalize'> &copy; copyright by <Link to= 'https://pitamchandra.github.io/portfolio/' className='text-success'>pitam chandra</Link> </p>
        </div>
    );
};

export default Footer;