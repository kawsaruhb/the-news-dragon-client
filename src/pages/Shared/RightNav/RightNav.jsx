import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h6 className='font-weight-bold'>Login With</h6>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button className='mb-4' variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            <div className='mb-3'>
                <h6>Find Us On</h6>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>

    );
};

export default RightNav;