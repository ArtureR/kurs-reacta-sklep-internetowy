import React from 'react';
import { Button } from 'react-bootstrap';
import './newsletter.scss';

const Newsletter = () => {
    return (
        <footer className="newsletter-content row justify-content-center align-content-center">
            <h5 className="newsletter-text">Join our community to get free updates about discounts!</h5>
            <Button bsPrefix="newsletter-btn">Subscribe</Button>
        </footer>
    );
};

export default Newsletter;