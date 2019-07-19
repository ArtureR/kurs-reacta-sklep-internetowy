import React from "react";
import './navigation.scss'

export class Navigation extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const { value } = event.target;
        event.preventDefault();
        this.setState({
            value: value
        });
    };

    submitForm = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState({
           value: ''
        });
    }

    render() {
        const { value } = this.state
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand nav-fill justify-content-center">
                <ul className="nav navbar-nav nav-fill">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Homepage</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Discounts</a>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline search-form" onSubmit={this.submitForm}>
                                <input
                                value={value}
                                onChange={this.handleChange}
                                className="form-control form-control-md" 
                                type="text" 
                                placeholder="Search"/>
                                <button type="submit" className="search-button"></button>
                            </form>
                        </li>
                </ul>
            </nav>
        );
    }
};