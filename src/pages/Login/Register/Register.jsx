import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
    const {createUser,} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const path = location?.state?.pathname || "/login"

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            navigate(path)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleTerms = (event) =>{
        const isTerms = event.target.checked;
        setAccepted(isTerms);
    }


    return (
        <Container  className='mt-3'>
            <Form onSubmit={handleSubmit} className='w-25 mx-auto border p-3 shadow rounded bg-white'>
                <h5>Please Register</h5>
                <Form.Group className="mb-2" controlId="formGroupName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo url" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleTerms} type="checkbox" label={<>Accept <Link to='/terms'>terms and condition</Link> </>} />
                </Form.Group>
                <Button variant="outline-success" type='submit' id="button-addon1" disabled={!accepted}>Register</Button>
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
            </Form>
        </Container>
    );
};

export default Register;