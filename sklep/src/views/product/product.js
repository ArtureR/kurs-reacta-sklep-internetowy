import React from 'react';
import { connect } from "react-redux";
import { getProducts } from "../../store/selectors/selectors";
import { Container, Row, Col, Image } from 'react-bootstrap';
import AddToCart from '../../components/addToCart/addToCart';

const Product = (props) => {
  const currentId = parseInt(props.match.params.id);
  const { products } = props;
  const currentProduct = products.find(product => product.id === currentId);

  return (
    <Container className="product" >
      <Row>
        <Col xs={12} md={7}>
          <Image src={`${process.env.PUBLIC_URL}/photo/${currentProduct.photo}`} fluid />
        </Col>
        <Col xs={12} md={5}>
          <h1 className="category-title">{currentProduct.name}</h1>
          <h3 className="category-description">{currentProduct.category}</h3>
          <p className="category-type text-muted">{currentProduct.price} zł</p>
          <p className="category-description">{currentProduct.description}</p>
          <AddToCart productId={currentProduct.id} />
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state) => {
  return { products: getProducts(state) };
};


export default connect(mapStateToProps, mapDispatchToProps)(Product);