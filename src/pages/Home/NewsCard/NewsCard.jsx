import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const NewsCard = ({newsData}) => {
    const {title, image_url, _id, details, rating, thumbnail_url, author, total_view} = newsData;
    return (
        <Card className="mt-3">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{width : '40px',height : '40px',}} src={author ? author.img : "holder.js/40x40"} roundedCircle />
                <div className='flex-grow-1 ms-3'>
                    <p className='mb-0'>{author?.name}</p>
                    <p className='mb-0'>{moment(author?.published_date).format('YYYY-MM-DD')}</p>
                </div>
                <FaRegBookmark className='me-3 fs-4'></FaRegBookmark>
                <FaShareAlt className='fs-4'></FaShareAlt>
            </Card.Header>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
                {details && details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} className='text-warning'>Read More</Link></>}
            </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex">
                <div className="flex-grow-1 d-flex align-items-center">
                    <Rating style={{ maxWidth: 100 }} value={Math.round(rating?.number) || 0} readOnly />
                    <span className='ms-2'>{rating?.number}</span>
                </div>
                <div>
                <FaEye></FaEye> <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;