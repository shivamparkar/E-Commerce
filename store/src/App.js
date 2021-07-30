import React from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
