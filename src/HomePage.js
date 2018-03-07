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
  },
  btn: {
    alignSelf: "center",
    backgroundColor: "orange",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#253748",
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    fontSize: 30
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
