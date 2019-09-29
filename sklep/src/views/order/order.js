import React, { useState } from 'react';
import { connect } from "react-redux";
import { getUserData, getAddressBook, getDefaultAddress } from "../../store/selectors/selectors";
import { Container, Row, Col, Button, Tabs, Tab } from 'react-bootstrap';
import CartList from '../../components/cartList/cartList';


const Order = (props) => {
  const currentTab = props.match.params.step;
  const { history, user, addressBook, defaultAddress } = props;
  const initTab = currentTab ? currentTab : 'products';
  const initAddress = defaultAddress ? defaultAddress : 1;
  const [currentAddressId, setAddressId] = useState(initAddress);
  const currentAddress = addressBook.find(add => add.id === currentAddressId);

  function AddressBookSelector() {
    return addressBook.map((address) => {
      return (
        <Button
          key={address.id}
          className="address-btn mr-3"
          onClick={(k) => setAddressId(address.id)}
          active={currentAddressId === address.id}
          variant={currentAddressId === address.id ? 'success' : 'outline-success'}
        >
          <p>{address.street}</p>
          <p>{`${address.postalCode} ${address.city}`}</p>
          <p>{address.region}</p>
        </Button>
      );
    });
  }

  const handleSelectTab = k => history.push(`/order/${k}`);

  function ControlledTabs() {
    const [key] = useState(initTab);

    return (
      <Tabs fill id="controlled-tab-example" activeKey={key} onSelect={(k) => handleSelectTab(k)}>
        <Tab eventKey="products" title="Products">
          <CartList />
          <Button
            className="order-next-btn"
            onClick={(k) => handleSelectTab("shipment")}
            variant="success"
          >Next step</Button>
        </Tab>
        <Tab eventKey="shipment" title="Shipment">
          <Container>
            <Row>
              <Col xs={12} className="mb-2">
                <h4>Buyer:</h4>
              </Col>
              <Col md={4}>
                <p>First name: {user.firstName}</p>
              </Col>
              <Col md={4}>
                <p>Last name: {user.lastName}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="mb-2">
                <h4>Shippment address:</h4>
              </Col>
              <Col xs={12}>
                <AddressBookSelector />
              </Col>
            </Row>
            <Row>
              <Button
                className="order-next-btn"
                onClick={(k) => handleSelectTab("confirm")}
                variant="success"
              >Next step</Button>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="confirm" title="Confirm your order">
          <Container>
            <Row>
              <Col xs={12} md={12} lg={4}>
                <h4>Products:</h4>
                <CartList readOnly />
              </Col>
              <Col xs={12} md={6} lg={4} className="mb-2">
                <h4>Buyer:</h4>
                <p>First name: {user.firstName}</p>
                <p>Last name: {user.lastName}</p>
              </Col>
              <Col xs={12} md={6} lg={4} className="mb-2">
                <h4>Shipment address:</h4>
                <p>{currentAddress.street}</p>
                <p>{`${currentAddress.postalCode} ${currentAddress.city}`}</p>
                <p>{currentAddress.region}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className="order-next-btn"
                  onClick={() => history.push("/")}
                  variant="success"
                >Confirm your order</Button>
              </Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    );
  }

  return (
    <Container className="order">
      <Row>
        <Col>
          <h1>Finalize order</h1>
        </Col>
      </Row>
      <Row className="mt-2 mb-2">
        <Col xs={12}>
          <ControlledTabs />
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (state) => {
  return {
    user: getUserData(state),
    addressBook: getAddressBook(state),
    defaultAddress: getDefaultAddress(state),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Order);