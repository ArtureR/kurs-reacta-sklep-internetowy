import React from "react";
import { Navbar, Nav, Form } from 'react-bootstrap';
import './navigation.scss';


export class Navigation extends React.Component {

    handleChange = (event) => {
        this.props.handleSubmit(event.target.value);
    };

    handleSelect = (event) => {
        this.props.handleCategorySelect(event.target.value);
    }

    render() {
        const { value } = this.props;
        return (
            <Navbar className="bg-light" expand="sm">
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
                    <select title="Categories" id="basic-nav-dropdown" onChange={this.handleSelect}>
                        <option value="mammals">Mammals</option>
                        <option value="reptiles">Reptiles</option>
                        <option value="birds">Birds</option>
                        <option value="all">All animals</option>
                    </select>
                    <Nav.Item>
                        <Form className="form-inline search-form">
                            <Form.Control
                            value={value}
                            onChange={this.handleChange}
                            className="form-control form-control-md" 
                            type="text" 
                            placeholder="Search"/>
                            <button type="submit" className="search-button"></button>
                        </Form>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
};