import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";

import PostInput from "./PostInput";

import store from "../store/store";
import { changeModuleState, changeMood } from "../store/actions";

const moods = {
  1: "happy",
  2: "unsure",
  3: "sad"
}

class TheMoodBar extends React.Component {
  handleButton = (id) => {
    store.dispatch(changeModuleState(id == 1 ? true : false));
    store.dispatch(changeMood(moods[id]));
  };
  handleButtonStyle(id) {
    return moods[id] == this.props.mood
      ? styles.buttonActive
      : styles.buttonInactive;
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.header}>How are you feeling today?</Text>
        </View>
        <View style={[styles.container]}>
          <TouchableOpacity
            activeOpacity={0.7}
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
            activeOpacity={0.7}
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
            activeOpacity={0.7}
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
        <PostInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: "#4A5861",
    fontSize: 22,
    marginLeft: 8
  },
  container: {
    flexDirection: "row",
    marginTop: 2,
    //backgroundColor: "#4a586170"
  },
  button: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    height: 110,
    borderRadius: 8,
    marginHorizontal: 2
  },
  text: {
    //paddingVertical: 50,
    marginBottom: 15,
    alignSelf: "center",
    color: "white",
  },
  buttonActive: {
    backgroundColor: "#60BD6D",
  },
  buttonInactive: {
    backgroundColor: "#4A5861",
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

function mapStateToProps(state) {
  return {
    mood: state.mood,
  };
}

export default connect(mapStateToProps)(TheMoodBar);
