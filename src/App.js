import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import HomePage from './Views/homepage';
import ShoppingPage from './Views/Shopping/Shopping';
import Header from './Components/Header/Header';
import UserAccount from './Views/UserAccount/UserAccount';

import {auth} from './Firebase/firebase.utils'

class App extends Component {
  state = {
    currentUser: null
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ currentUser: user})

        console.log(user)
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShoppingPage} />
          <Route path="/signin" component={UserAccount} />
        </Switch>
      </div>
    );
  }
}

export default App;
