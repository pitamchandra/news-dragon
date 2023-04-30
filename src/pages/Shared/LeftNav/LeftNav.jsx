import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Insights from '../../News/Insights/Insights';


const LeftNav = () => {
    const [categories, setCategory] = useState([])
    useEffect(()=>{
        fetch('https://news-dragon-server-ic0cjbpwf-pitamchandra.vercel.app/category')
        .then(res => res.json())
        .then(data => setCategory(data))
        .catch(error =>{
            console.log(error);
        })
    }, [])
    return (
        <div>
            <h3>All Category</h3>
            <div className='text-center'>
                {
                    categories.map(category => {
                        return <NavLink key={category.id} to={`/category/${category.id}`} className={`d-block text-decoration-none text-black py-2 ${({isActive}) => isActive && 'bg-secondary'} `}>{category.name}</NavLink>
                    })
                }
            </div>
            <Insights></Insights>
        </div>
    );
};

export default LeftNav;