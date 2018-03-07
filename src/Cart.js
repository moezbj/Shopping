import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListItem,
  Button
} from "react-native";
import { connect } from "react-redux";
import { checkOut } from "./actions/ProductAction";

class Cart extends Component {
  render() {
    console.log(this.props.myCart);
    return (
      <View>
        <Text>Your Cart</Text>
        <View>
          {this.props.myCart.map((el, i) => {
            return (
              <View key={i}>
                <Text>Product Name : {el}</Text>
              </View>
            );
          })}
          <Text>Total :{this.props.total} $</Text>
          <Button title="chekout" onPress={this.props.checkOut} />
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    checkOut: () => {
      dispatch(checkOut());
    }
  };
};

const mapStateToProps = state => {
  const { myCart, total } = state.prod;
  return {
    myCart,
    total
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
