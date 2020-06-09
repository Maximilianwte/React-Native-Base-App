import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import svgHappy from "../assets/svg/happy.js";

export default class TheMoodBar extends React.Component {
  state = {
    activeButton: 1,
  };

  handleButton = (id) => {
    console.log(id);
    this.setState({
      activeButton: id,
    });
  };
  handleButtonStyle(id) {
    return id == this.state.activeButton
      ? styles.buttonActive
      : styles.buttonInactive;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity="0.7"
          style={[styles.button, this.handleButtonStyle(1)]}
          onPress={() => this.handleButton(1)}
        >
          <View>
            <svgHappy />
            <Text style={styles.text}>Happy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity="0.7"
          style={[styles.button, this.handleButtonStyle(2)]}
          onPress={() => this.handleButton(2)}
        >
          <View>
            <Text style={styles.text}>Unsure</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity="0.7"
          style={[styles.button, this.handleButtonStyle(3)]}
          onPress={() => this.handleButton(3)}
        >
          <View>
            <Text style={styles.text}>Sad</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  touchableContainer: {
    flex: 1,
    justifyContent: "flex-end",
    height: 120,
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    height: 120,
  },
  text: {
    //paddingVertical: 50,
    marginBottom: 10,
    alignSelf: "center",
    color: "#183446",
  },
  buttonActive: {
    backgroundColor: "#60BD6D",
  },
  buttonInactive: {
    backgroundColor: "#5EA667",
  },
});
