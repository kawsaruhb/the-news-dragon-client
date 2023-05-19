import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <Container>
            <div className="text-center mt-2">
                <img src={logo} alt="" />
                <p className='text-secondary mt-2'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex bg-light p-2 rounded'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={70} pauseOnHover>
                    I can be a React component, multiple React components, or just some text.
                    I can be a React component, multiple React components.
                </Marquee>
            </div>

            {/*------------------------------------------ Navbar ----------------------------------------- */}

            
        </Container>
    );
};

export default Header;