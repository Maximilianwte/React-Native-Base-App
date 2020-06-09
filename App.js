import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Front from "./Views/Front.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Front style="This is a prop." />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {

  },
});