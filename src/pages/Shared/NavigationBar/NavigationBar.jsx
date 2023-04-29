import React from 'react';
import { useContext } from 'react';
import { Container, Navbar, Nav, Button,  } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const {user, logout} = useContext(AuthContext)
    const handleSignOut = () =>{
        logout()
    }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className='py-4' bg="transparent" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/category/0" className='fs-4 text-black px-3 text-decoration-none'>Home</Link>
                        <Link to="#pricing" className='fs-4 text-black px-3 text-decoration-none'>About</Link>
                        <Link to="#pricing" className='fs-4 text-black px-3 text-decoration-none'>Career</Link>
                        
                    </Nav>
                    <Nav className='align-items-center'>
                        <FaUser style={{fontSize : '25px', marginRight: '20px'}}></FaUser>
                        {
                            user ?
                            <Link onClick={handleSignOut}><Button variant="outline-success">Logout</Button></Link> :
                            <Link to={'/login'}><Button variant="outline-success">Login</Button></Link>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </Container>
    );
};

export default NavigationBar;