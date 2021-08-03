import React from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './components/shop/shop.component';

import Header from './header/header.component';

import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';

import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.state({ currentUser: user });
    });
  }
   
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser} />
    <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
       <Route exact path='/signin' component={SignInAndSignOutPage} />
    </Switch> 
    </div>
  );
}
}

export default App;
