import React from 'react';
import { connect } from "react-redux";
import ProductsList from '../../components/productsList/productsList';
import { getProducts } from "../../store/selectors/selectors";
import { Container, Row, Col } from 'react-bootstrap';
import "./category.scss";

const Category = (props) => {
  const currentCategory = props.match.params.category;
  const { products } = props;
  const filteredProductsByCategory = products.filter(product => product.category === currentCategory);
  const displayedProducts = currentCategory ? filteredProductsByCategory : products;
  const displayedHeader = currentCategory ? currentCategory : "All animals";

  return (
    <Container className="category" >
      <Row>
        <Col>
          <h1 className="category-title">{displayedHeader}</h1>
          <ProductsList products={displayedProducts} />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { products: getProducts(state) };
};


export default connect(mapStateToProps)(Category);
