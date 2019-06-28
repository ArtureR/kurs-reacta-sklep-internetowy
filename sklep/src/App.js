import React from 'react';
import Header from './components/header/header';

import Content from './components/content/content';
import { products } from './products';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content products={products}/>
    </div>
  );
}

export default App;
