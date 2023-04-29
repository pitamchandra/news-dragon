import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const {loginUser, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    
    const path = location?.state?.pathname || '/category/0';
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser)
            navigate(path)
        })

        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <Container  className='mt-5 pt-5'>
            <Form onSubmit={handleSubmit} className='w-25 mx-auto border p-3 shadow rounded bg-white'>
            <h5>Please Login</h5>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show Password" />
                </Form.Group>
                <Button variant="outline-success" id="button-addon1" type='submit'>Login</Button>
                <p>Don&apos;t have an account? <Link to='/register' state={location?.state} replace>Register</Link></p>
            </Form>
        </Container>
    );
};

export default Login;