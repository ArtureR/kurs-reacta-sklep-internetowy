import React from "react";
import {
    Route
  } from 'react-router-dom';
import About from '../about/about';
import Category from '../category/category';
import Product from '../product/product';
import SearchResults from '../searchResults/searchResults';
import Home from '../home/home';
  
const Content = () => {
    return (  
        <div className="content">
            <Route path="/about" component={About} />
            <Route 
                path="/category" 
                render={props => <Category {...props}/>} />
            <Route path="/product" component={Product} />
            <Route path="/search" component={SearchResults} />
            <Route exact path="/" component={Home} />
        </div>
    );
};

export default Content;