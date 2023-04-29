import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    let {id} = useParams();
    const newsData = useLoaderData()
    return (
        <div>
            {
                id === '0' ?
                <h2>All News: {newsData.length}</h2> :
                <h2>This Category News: {newsData.length}</h2>
            }
            {
            newsData.map(data => <NewsCard
                key={data._id}
                newsData = {data}
            ></NewsCard>)
        }
        </div>
    );
};

export default Category;