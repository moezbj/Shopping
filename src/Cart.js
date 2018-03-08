import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ListItem,
  ListView,
  Button,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { checkOut, removeProduct } from "./actions/ProductAction";

class Cart extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      data: ds.cloneWithRows(this.props.myCart)
    };
  }
  renderItem = item => {
    return (
      <View style={styles.main}>
        <View style={styles.prod}>
          <Text style={styles.text}> {item.item.name}</Text>
        </View>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => this.props.removeProduct(item)}
        >
          <Icon name="remove" size={30} color="#900" />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.props.myCart}
          renderItem={this.renderItem}
          keyExtractor={(item, key) => key.toString()}
          renderSeparator={this.renderSeparator}
        />
        <Text style={styles.text}>Total :{this.props.total} $</Text>
        <Button
          title="chekout"
          onPress={this.props.checkOut}
          style={styles.btn}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  btn: {
    marginTop: 20
  },
  main: {
    flexDirection: "row"
  },
  prod: {
    flex: 3,
    borderWidth: 1,
    borderColor: "blue"
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    checkOut: () => {
      dispatch(checkOut());
    },
    removeProduct: item => {
      dispatch(removeProduct(item));
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
