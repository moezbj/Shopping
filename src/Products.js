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
import { Actions } from "react-native-router-flux";

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
        <Text style={styles.text}>{item.item.name}</Text>
        <Text style={styles.text}>- Price:</Text>
        <Text style={styles.text}>{item.item.price}</Text>
        <TouchableOpacity
          onPress={() => this.props.addToCart(item)}
          style={styles.btn}
        >
          <Text style={styles.text}>add</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.products}
          renderItem={this.renderItem}
          keyExtractor={(item, key) => key.toString()}
        />
        <TouchableOpacity onPress={Actions.cart} style={styles.btn}>
          <Text style={styles.text}>My Cart </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
