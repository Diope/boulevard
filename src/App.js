import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';

import HomePage from './Views/homepage';
import ShoppingPage from './Views/Shopping/Shopping'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShoppingPage} />
      </Switch>
    </div>
  );
}

export default App;
