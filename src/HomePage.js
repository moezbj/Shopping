import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Button } from "react-native";
import PropTypes from "prop-types";

import Products from "./Products.js";
import Cart from "./Cart.js";
import {
  Scene,
  Router,
  Actions,
  Reducer,
  Stack
} from "react-native-router-flux";

import { addToCart, checkOut } from "./actions/ProductAction";

class HomePage extends Component {
  static navigationOptions = {
    title: "News App",
    headerStyle: { backgroundColor: "#253748" },
    headerTintColor: "white",
    headerTitleStyle: {
      fontSize: 16,
      alignSelf: "center",
      flex: 2
    }
  };

  addToCart = item => {
    this.props.addToCart(item);
  };
  checkOut() {
    this.props.checkOut();
  }

  render() {
    return (
      <View>
        <Products addToCart={this.addToCart} />
        <Button title="Check my cart" onPress={Actions.cart} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const products = state;
  return {
    products
  };
};
export default connect(mapStateToProps, {
  addToCart,
  checkOut
})(HomePage);
