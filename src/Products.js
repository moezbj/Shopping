import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListView,
  TouchableOpacity
} from "react-native";

import { connect } from "react-redux";
import { addToCart } from "./actions/ProductAction";

class Products extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      data: ds.cloneWithRows(this.props.products)
    };
  }

  renderItem = item => {
    return (
      <View style={{ flexDirection: "row", padding: 20 }}>
        <Text>{item.item.name}</Text>
        <Text>- Price:</Text>
        <Text>{item.item.price}</Text>
        <TouchableOpacity
          onPress={() => this.props.addToCart(item)}
          style={{ borderWidth: 1, borderColor: "grey", marginLeft: 15 }}
        >
          <Text>add</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.props.products}
        renderItem={this.renderItem}
        keyExtractor={(item, key) => key.toString()}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch(addToCart(item));
    }
  };
};

const mapStateToProps = state => {
  const products = state.prod.products;
  return {
    products
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
