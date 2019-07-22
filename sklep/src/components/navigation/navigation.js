import React from "react";
import './navigation.scss';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


export class Navigation extends React.Component {

    handleChange = (event) => {
        const { value } = event.target;
        this.props.handleSubmit(value);
    };

    render() {
        const { value } = this.props;
        return (
            <Navbar className="bg-light justify-content-center d-flex" expand="lg">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="#homepage">Homepage</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#about">About us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#discounts">Discounts</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Mammals</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Reptiles</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Birds</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <form className="form-inline search-form">
                            <input
                            value={value}
                            onChange={this.handleChange}
                            className="form-control form-control-md" 
                            type="text" 
                            placeholder="Search"/>
                            <button type="submit" className="search-button"></button>
                        </form>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
};