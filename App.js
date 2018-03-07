import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./src/reducers";
import HomePage from "./src/HomePage";

export default class App extends Component<Props> {
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <View>
          <HomePage />
        </View>
      </Provider>
    );
  }
}
