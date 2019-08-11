import React from 'react';
import { Image } from 'react-bootstrap';

const Product = (props) => {
    return(
        <div>
            <h2>{props.animal.name}</h2>
            <Image src={props.animal.photo} alt={props.animal.name} fluid/>
        </div>

    );
};

export default Product;