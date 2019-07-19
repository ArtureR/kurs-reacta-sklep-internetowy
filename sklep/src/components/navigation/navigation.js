import React from "react";
import './navigation.scss'

export class Navigation extends React.Component {

    handleChange = (event) => {
        const { value } = event.target;
        this.props.handleSubmit(value);
    };

    // submitForm = (event) => {
    //     event.preventDefault();
    //     this.props.handleSubmit(this.state);
    //     this.setState({
    //        value: ''
    //     });
    // }

    render() {
        const { value } = this.props
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
                            <form className="form-inline search-form" handleChange={this.handleChange}>
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