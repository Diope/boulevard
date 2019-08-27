import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import HomePage from './Views/homepage';
import ShoppingPage from './Views/Shopping/Shopping';
import Header from './Components/Header/Header';
import UserReg from './Views/UserReg/UserReg';

import {auth, createUserProfile} from './Firebase/FirebaseConfig'

class App extends Component {
  state = {
    currentUser: null
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        })
      } else {
        this.setState({currentUser: user});
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
          <Route path="/signin" component={UserReg} />
        </Switch>
      </div>
    );
  }
}

export default App;
