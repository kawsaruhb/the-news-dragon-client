import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
        .then( navigate('/login') )
        .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar className='mb-5 mt-4' collapseOnSelect expand="lg" bg="" variant="">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-bold">
                            <Link className='text-decoration-none me-4' to='/'>Home</Link>
                            <Link className='text-decoration-none me-4' to='/'>About</Link>
                            <Link className='text-decoration-none me-4' to='/'>Career</Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2.5rem' }}>
                                </FaUserCircle>
                            }

                            {user ?
                                <Button onClick={handleLogOut} variant="secondary">Logout</Button> :

                                <Link to='/login'>
                                    <Button variant="dark">Login</Button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;