import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value

        createUser(email, password)
        .then( result => {
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch( error => {
            console.log(error)
        })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Container className='w-25 mx-auto bg-light p-4 rounded'>
            <h5 className='fw-bold text-center mb-4'>Register your account</h5>
            <hr className='mb-3' />
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    name='accept' 
                    label={<>Accept <Link to='/terms'> Terms & Conditions</Link></>} />
                </Form.Group>

                <Button className='w-100 bg-primary border-0' disabled={!accepted} variant="primary" type="submit">
                    Register
                </Button>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-muted mb-4">
                    Already Have An Account ? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;