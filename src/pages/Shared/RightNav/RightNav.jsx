import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub, FaGit, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bgBackground from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <>
            <div className='mb-4'>
                <h3>Login With</h3>
                <Button className='w-100 mt-3 d-block' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
                <Button className='w-100 mt-3 d-block' variant="outline-dark"> <FaGithub></FaGithub> Login With Github</Button>
            </div>
            <div className='mb-4'>
                <h3>Find Us On</h3>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='text-primary'></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary'></FaTwitter> Twiter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-danger'></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='bg-secondary p-3 '>
                <h3>Q-Zone</h3>
                <div>
                    <img className='w-100' src={qZone1} alt="" />
                    <img className='w-100' src={qZone3} alt="" />
                    <img className='w-100' src={qZone2} alt="" />
                </div>
            </div>
            <div className='mt-4'>
            <Card className="text-white h-auto">
                <Card.Img className='w-100' src={bgBackground} alt="Card image" />
                <Card.ImgOverlay className='text-center p-4'>
                    <Card.Title className='fs-3 mt-4'>Create an Amazing Newspaper</Card.Title>
                    <Card.Text className='mt-4'>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                    </Card.Text>
                    <Button className='mt-3 ' variant="danger">Learn More</Button>
                </Card.ImgOverlay>
            </Card>
            </div>
        </>
    );
};

export default RightNav;