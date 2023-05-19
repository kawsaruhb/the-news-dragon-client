import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='text-center p-4'>
            <h2 className='fw-bold text-center'>Terms and Conditions</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, sunt velit natus temporibus voluptatem unde neque ab optio esse soluta pariatur dolores repellat laboriosam impedit asperiores dicta necessitatibus earum et illo? Rem, debitis perspiciatis id animi impedit inventore atque repellendus molestias consectetur dignissimos eum vitae. Nam quis temporibus facilis quia iste asperiores suscipit, minus inventore magnam totam et quod odio dolor. Cum mollitia, nihil magnam illum nulla et beatae natus.
            </p>
            <p>Go back to <Link to='/register'> Register</Link></p>
        </div>
    );
};

export default Terms;