import React from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './components/shop/shop.component';

import Header from './header/header.component';

import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';



function App() {
  return (
    <div>
    <Header />
    <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
       <Route exact path='/signin' component={SignInAndSignOutPage} />
    </Switch> 
    </div>
  );
}

export default App;
