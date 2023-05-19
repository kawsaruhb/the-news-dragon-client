import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/category/0';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then( result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, { replace: true })
        })
        .catch( error => {
            console.log(error)
        })

    }

    return (
        <Container className='w-25 mx-auto bg-light p-4 rounded'>
            <h5 className='fw-bold text-center mb-4'>Login your account</h5>
            <hr className='mb-3' />
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
            
                <Button className='w-100 bg-dark border-0' variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-muted mb-4">
                    Don&apos;t Have An Account ? <Link to='/register'>Register</Link>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;