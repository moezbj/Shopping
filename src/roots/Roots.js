import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";

import Products from "../Products.js";
import Cart from "../Cart.js";

const Roots = () => (
  <Router>
    <Scene key="root">
      <Scene key="products" component={Products} title="My Products" />
      <Scene key="cart" component={Cart} title="My Cart" />
    </Scene>
  </Router>
);
export default Roots;
