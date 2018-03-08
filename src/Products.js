import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListView,
  TouchableOpacity,
  Image
} from "react-native";

import { connect } from "react-redux";
import { addToCart } from "./actions/ProductAction";
import { Actions } from "react-native-router-flux";
import images from "./images";

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

  renderItem = ({ item }) => {
    const { addToCart } = this.props;
    return (
      <View style={styles.prod}>
        <Text style={styles.text}>{item.name}</Text>
        <Image style={styles.img} source={images[item.url]} />
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={styles.text}>Price:</Text>
          <Text style={styles.text}>{item.price}/Kg</Text>
        </View>
        <TouchableOpacity onPress={() => addToCart(item)} style={styles.btnAdd}>
          <Text style={styles.text}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.products}
          renderItem={this.renderItem}
          keyExtractor={(item, key) => key.toString()}
        />

        <View style={styles.footer}>
          <TouchableOpacity onPress={Actions.cart} style={styles.btn}>
            <Text style={styles.text}>My Cart </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
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
  btnAdd: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#253748",
    marginLeft: 5,
    marginRight: 5
  },
  text: {
    fontSize: 30,
    color: "white",
    alignSelf: "center"
  },
  prod: {
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#78909C"
  },
  footer: {
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 200,
    height: 200,
    alignSelf: "center",
    margin: 5
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
