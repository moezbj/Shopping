import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Actions, Scene, Router } from "react-native-router-flux";

import Products from "./Products.js";
import Cart from "./Cart.js";

import Roots from "./roots/Roots";

import { addToCart, checkOut } from "./actions/ProductAction";

class HomePage extends Component {
  addToCart = item => {
    this.props.addToCart(item);
  };
  checkOut() {
    this.props.checkOut();
  }
  render() {
    return (
      <View style={styles.container}>
        <Roots />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
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
