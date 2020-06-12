import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { Provider } from "react-redux";

import store from "./store/store.js";
import Front from "./Views/Front.js";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle = "light-content" hidden = {false} translucent = {true}/>
        <View style={styles.container}>
          <Front style="This is a prop." />
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#1B272E"
  },
});
