import React from 'react';
import { connect } from "react-redux";
import { getProducts, getPromotedProducts } from "../../store/selectors/selectors";
import { Container, Row, Col, Button, Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dogCategory from "../../assets/dog_category.svg";
import birdCategory from "../../assets/bird_category.svg";
import catCategory from "../../assets/cat_category.svg";

const Home = (props) => {
  const { promotedProducts } = props;
  const hasPromotedProducts = promotedProducts.length > 0;
  const productsToDisplay = hasPromotedProducts && promotedProducts.map((product, index) => {
    return (
      <Carousel.Item key={index}>
        <Image
          fluid
          src={`${process.env.PUBLIC_URL}/photo/${product.photo}`}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="text-uppercase font-weight-bold">{product.name}</h2>
          <h3>Save 30% - new promotion: <del className="text-danger font-weight-bold mr-3">{product.price * 1.3}zł</del>{product.price}zł<span></span></h3>
          <p><Button
            variant="info"
            as={Link}
            to={`/product/${product.id}`}
            className="pl-4 pr-4 mt-2"
          >Show product page</Button></p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Container className="home">
      <Row>
        <Col>
          <h1>Home!!</h1>
          {hasPromotedProducts && (
            <Carousel  >
              {productsToDisplay}
            </Carousel>
          )}
        </Col>
      </Row>
      <Row className="home-categories mt-2 mb-2">
        <Col xs={12}>
          <h2>Find your best friend!</h2>
        </Col>
        <Col xs={12} md={4} 
          className="home-categories-item"
          as={Link}
          to={'/category/dogs'}
        >
          <img className="img-fluid" src={dogCategory} alt="adoppt" />
          <h1 className="home-categories-item-label">Dogs</h1>
        </Col>
        <Col xs={12} md={4} 
          className="home-categories-item"
          as={Link}
          to={'/category/cats'}
          >
          <img className="img-fluid" src={catCategory} alt="adoppt" />
          <h1 className="home-categories-item-label">Cats</h1>
        </Col>
        <Col xs={12} md={4} 
          className="home-categories-item"
          as={Link}
          to={'/category/birds'}
          >
          <img className="img-fluid" src={birdCategory} alt="adoppt" />
          <h1 className="home-categories-item-label">Birds</h1>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state) => {
  return {
    products: getProducts(state),
    promotedProducts: getPromotedProducts(state),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);