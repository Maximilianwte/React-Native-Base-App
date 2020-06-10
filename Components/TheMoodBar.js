import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import PostInput from "./PostInput";

export default class TheMoodBar extends React.Component {
  state = {
    activeButton: 0,
    postInputActive: false,
    barActive: true
  };

  handleButton = (id) => {
    this.setState(
      {
        activeButton: id,
      },
      function () {
        this.setState({
          postInputActive: this.state.activeButton == 1 ? true : false,
        });
      }
    );
    /* this.setState({barActive: false}) */
  };
  handleButtonStyle(id) {
    return id == this.state.activeButton
      ? styles.buttonActive
      : styles.buttonInactive;
  };
  handleBarHidden() {
    return !this.state.barActive ? styles.hidden : undefined;
  }

  render() {
    return (
      <View>
        <View style={[styles.container, this.handleBarHidden()]}>
          <TouchableOpacity
            activeOpacity="0.7"
            style={[styles.button, this.handleButtonStyle(1)]}
            onPress={() => this.handleButton(1)}
          >
            <View>
              <Image
                style={styles.image}
                source={require("../assets/happy.png")}
              />
              <Text style={styles.text}>Happy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity="0.7"
            style={[styles.button, this.handleButtonStyle(2)]}
            onPress={() => this.handleButton(2)}
          >
            <View>
              <Image
                style={styles.image}
                source={require("../assets/meh.png")}
              />
              <Text style={styles.text}>Unsure</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity="0.7"
            style={[styles.button, this.handleButtonStyle(3)]}
            onPress={() => this.handleButton(3)}
          >
            <View>
              <Image
                style={styles.image}
                source={require("../assets/sad.png")}
              />
              <Text style={styles.text}>Sad</Text>
            </View>
          </TouchableOpacity>
        </View>
        <PostInput active={this.state.postInputActive} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hidden: {
    display: "none"
  },
  container: {
    flexDirection: "row"
  },
  button: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    height: 120,
  },
  text: {
    //paddingVertical: 50,
    marginBottom: 15,
    alignSelf: "center",
    color: "#183446",
  },
  buttonActive: {
    backgroundColor: "#60BD6D",
  },
  buttonInactive: {
    backgroundColor: "#5EA667",
  },
  svgItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 10,
  },
});
