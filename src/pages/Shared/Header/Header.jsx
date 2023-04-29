import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center my-4'>
                <img src={logo} alt="Header logo" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='bg-secondary p-2 d-flex rounded'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-white ' pauseOnHover={true} speed={50} gradient={false} gradientColor={[12,215,69]} gradientWidth={300}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;