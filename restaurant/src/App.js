import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './componnets/Hero';
import Products from './componnets/Products';
import {productData,productDataTwo} from './componnets/Products/data';
import Feature from './componnets/Feature';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />      
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for you' data={productDataTwo} />
    </Router>
  );
}

export default App;
