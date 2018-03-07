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
  renderSeparator = () => (
    <View
      style={{
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        margin: 10
      }}
    />
  );
  renderItem = item => {
    return (
      <View style={styles.prod}>
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
      <View style={styles.container}>
        <FlatList
          horizontal
          data={this.props.products}
          renderItem={this.renderItem}
          keyExtractor={(item, key) => key.toString()}
          renderSeparator={this.renderSeparator}
        />
        <TouchableOpacity onPress={Actions.cart} style={styles.btn}>
          <Text style={styles.text}>My Cart </Text>
        </TouchableOpacity>
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
  },
  prod: {
    padding: 20,
    borderColor: "black",
    borderWidth: 1
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
