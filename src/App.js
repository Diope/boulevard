import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import './App.css';

import HomePage from './Views/homepage';
import ShoppingPage from './Views/Shopping/Shopping';
import Header from './Components/Header/Header';
import UserReg from './Views/UserReg/UserReg';

import {auth, createUserProfile} from './Firebase/FirebaseConfig'
import { setCurrentUser } from './Redux/user/user.actions';
import { selectCurrentUser } from './Redux/user/user.selectors'
import { createStructuredSelector } from 'reselect';


class App extends Component {

  unSubscribeFromAuth = null

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        })
      } else {
        setCurrentUser(user);
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShoppingPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<UserReg />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
