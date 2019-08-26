import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import HomePage from './Views/homepage';
import ShoppingPage from './Views/Shopping/Shopping'
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShoppingPage} />
      </Switch>
    </div>
  );
}

export default App;
