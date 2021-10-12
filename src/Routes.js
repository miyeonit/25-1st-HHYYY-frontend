import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import ProductCategory from './pages/Product/ProductCategory';
import ProductDetail from './pages/Product/ProductDetail';
import Search from './pages/Search/Search';
import Signup from './pages/Users/Signup/Signup';
import Signin from './pages/Users/Signin/Signin';
import Cart from './pages/Cart/Cart';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/product-category" component={ProductCategory} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
