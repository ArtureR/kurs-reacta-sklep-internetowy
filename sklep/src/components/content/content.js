import React from "react";
import {
    Route
  } from 'react-router-dom';
import About from '../../views/about/about';
import Category from '../../views/category/category';
import Product from '../../views/product/product';
import SearchResults from '../../views/searchResults/searchResults';
import Home from '../../views/home/home';
  
const Content = () => {
    return (  
        <div className="content">
            <Route path="/about" component={About} />
            <Route 
                path="/category/:category?" 
                component={Category} />
            <Route path="/product/:id" component={Product} />
            <Route path="/search" component={SearchResults} />
            <Route exact path="/" component={Home} />
        </div>
    );
};

export default Content;