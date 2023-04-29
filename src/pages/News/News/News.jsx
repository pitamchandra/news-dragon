import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Insights from '../Insights/Insights';

const News = () => {
    const newsData = useLoaderData()
    const {title, image_url, _id, details, category_id} = newsData;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <Insights col='3'></Insights>
        </div>
    );
};

export default News;